import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
@Unique(['email'])
@Unique(['cpf'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  cpf: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;


  async checkPassword(password: string): Promise<boolean> {

    const hash = await bcrypt.hash(password, 10);
    return bcrypt.compare(password, this.password);
  }
}
