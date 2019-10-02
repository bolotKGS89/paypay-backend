import { Controller, Get, Res, HttpStatus, Delete, Param, Post, Body, Put } from '@nestjs/common';
import { AdminDbService } from './admin.db.service';
import {EmployeeDto} from '../dtos/EmployeeDto';

@Controller('employees')
export class AdminController {
  constructor(private readonly adminDbService: AdminDbService) {}

  @Get()
  getEmployees(@Res() res) {
     return res.status(HttpStatus.OK).json(this.adminDbService.getAllEmployees());
  }

  @Delete(':id')
  deleteEmployee(@Param() param, @Res() res) {
    try {
      const employee = this.adminDbService.deleteEmployee(param.id);
      return res.status(HttpStatus.OK).json(employee.name);
    } catch(e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message);
    }
  }

  @Post()
  saveEmployee(@Body() employee: EmployeeDto, @Res() res) {
    try {
      return res.status(HttpStatus.OK).json(employee.name);
    } catch(e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message);
    }
  }

  @Put()
  updateEmployee(@Body() employee: EmployeeDto, @Res() res) {
    try {
      const updatedEmployee = this.adminDbService.updateEmployee(employee.id);
      return res.status(HttpStatus.OK).json(updatedEmployee.name);
    } catch(e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message);
    }
  }
}
