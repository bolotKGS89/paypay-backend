import { Controller, Get, Res, HttpStatus, Delete, Param, Post, Body, Put } from '@nestjs/common';
import { PerformanceDbService } from './performance.db.service';
import {PerformanceDto} from '../dtos/PerformanceDto';

@Controller('performance')
export class PerformanceController {
    constructor(private readonly performanceDbService: PerformanceDbService) {}

    @Get()
    getPerformanceList(@Res() res) {
        res.status(HttpStatus.OK).json(this.performanceDbService.getAllPeformance());
    }

    @Post()
    savePerformance(@Body() performance: PerformanceDto, @Res() res) {
      res.status(HttpStatus.OK).json(performance.employeeName);
    }
  
    @Put()
    updatePerformace(@Body() performance: PerformanceDto, @Res() res) {
      const updatedEmployee = this.performanceDbService.updatePeformance(performance.id);
      res.status(HttpStatus.OK).json(updatedEmployee.employeeName);
    }

}