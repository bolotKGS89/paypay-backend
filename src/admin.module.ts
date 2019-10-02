import { Module } from '@nestjs/common';
import {AdminController} from './admin/admin.controller';
import {AdminDbService} from './admin/admin.db.service';
import {PerformanceController} from './admin/performance.controller'
import {PerformanceDbService} from './admin/performance.db.service';

@Module({
  imports: [],
  controllers: [AdminController, PerformanceController],
  providers: [AdminDbService, PerformanceDbService],
})
export class AdminModule{}