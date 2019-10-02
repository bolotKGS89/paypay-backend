import { Controller, Get, Res, HttpStatus, Delete, Param, Post, Body, Put } from '@nestjs/common';
import {FeedbackDto} from '../dtos/FeedbackDto';
import {FeedbackDbService} from '../employee/feedback.db.service'

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackDbService: FeedbackDbService) {}

    @Get()
    getAllFeedback(@Res() res) {
        res.status(HttpStatus.ACCEPTED).json(this.feedbackDbService.getAllEmployees());
    }

    @Post()
    saveFeedback(@Body() feedback: FeedbackDto, @Res() res) {
      res.status(HttpStatus.OK).json('success');
    }
  
    @Put()
    updateFeedback(@Body() feedback: FeedbackDto, @Res() res) {
      const updatedFeedback = this.feedbackDbService.updateEmployee(feedback.id);
      res.status(HttpStatus.OK).json(updatedFeedback.id);
    }
}