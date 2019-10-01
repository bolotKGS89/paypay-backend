import { Controller, Get, Res, HttpStatus, Delete, Param } from '@nestjs/common';
import { AdminDbService } from './admin.db.service';

@Controller('employees')
export class AdminController {
  constructor(private readonly adminDbService: AdminDbService) {}

  @Get()
  getEmployees(@Res() res) {
     res.status(HttpStatus.OK).json(this.adminDbService.getAllEmployees());
  }

  @Delete(':id')
  deleteEmployee(@Param() param, @Res() res) {
    res.status(HttpStatus.OK).json('deleted ' + param.id);
  }

  
}
