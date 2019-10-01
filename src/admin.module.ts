import { Module } from '@nestjs/common';
import {AdminController} from './admin/admin.controller';
import {AdminDbService} from './admin/admin.db.service';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminDbService],
})
export class AdminModule{}