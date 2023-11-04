import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

import { User } from 'src/users/users.model';
import { Role } from './roles.model';
import { UserRoles } from './user-roles.model';

@Module({
  controllers: [RolesController],
  exports: [RolesService],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  providers: [RolesService],
})
export class RolesModule {}
