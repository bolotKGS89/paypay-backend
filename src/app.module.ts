import { Module } from '@nestjs/common';
import {AdminModule} from './admin.module';
import {EmployeeModule} from './employee.module';

@Module({
  imports: [AdminModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
