import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService{
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  )
{}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User;
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.role = createUserDto.role;
    user.cpf = createUserDto.cpf;

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // 10 é o custo de processamento, pode ser ajustado conforme necessário
    user.password = hashedPassword;

    return await this.userRepository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findUserById(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
}

async updateUser(updateUserDto: UpdateUserDto, id: string): Promise<User> {
  const user = await this.findUserById(id);
  if (!user) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
  const { name, email,password } = updateUserDto;
  user.name = name? name : user.name;
  user.email = email? email : user.email;
  // Verifica se a senha foi alterada
  if (password) {
    // Gera um novo hash para a nova senha
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
  }

  return await user.save();
}


  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  

  };

