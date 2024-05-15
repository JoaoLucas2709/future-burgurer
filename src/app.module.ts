import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';


@Module({
  imports: [UserModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
