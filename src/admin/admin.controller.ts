import { Controller, Get, Res, HttpStatus, Delete, Param, Post, Body, Put } from '@nestjs/common';
import { AdminDbService } from './admin.db.service';
import {Employee} from '../dtos/EmployeeDto';

@Controller('employees')
export class AdminController {
  constructor(private readonly adminDbService: AdminDbService) {}

  @Get()
  getEmployees(@Res() res) {
     res.status(HttpStatus.OK).json(this.adminDbService.getAllEmployees());
  }

  @Delete(':id')
  deleteEmployee(@Param() param, @Res() res) {
    const employee = this.adminDbService.deleteEmployee(param.id);
    res.status(HttpStatus.OK).json(employee.name);
  }

  @Post()
  saveEmployee(@Body() employee: Employee, @Res() res) {
    res.status(HttpStatus.OK).json({'inserted': true});
  }

  @Put()
  updateEmployee(@Body() employee: Employee, @Res() res) {
    const updatedEmployee = this.adminDbService.deleteEmployee(employee.id);
    res.status(HttpStatus.OK).json(updatedEmployee.name);
  }
}
