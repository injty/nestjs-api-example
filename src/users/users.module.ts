import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { RolesModule } from 'src/roles/roles.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// models
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from './users.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule],
})
export class UsersModule {}
