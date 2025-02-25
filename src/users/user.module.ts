import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';





@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule
   
  ],
  controllers: [UsersController],
  providers: [UsersService],

})
export class UserModule {}
export class AppModule{}

export default UserModule;
