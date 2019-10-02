import { Controller, Get, Res, HttpStatus, Delete, Param, Post, Body, Put } from '@nestjs/common';
import {FeedbackDto} from '../dtos/FeedbackDto';
import {FeedbackDbService} from '../employee/feedback.db.service'

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackDbService: FeedbackDbService) {}

    @Get()
    getAllFeedback(@Res() res) {
      return res.status(HttpStatus.OK).json(this.feedbackDbService.getAllFeedbacks());
    }

    @Post()
    saveFeedback(@Body() feedback: FeedbackDto, @Res() res) {
      if(Object.keys(feedback).length == 0) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json('error');
      }

      return res.status(HttpStatus.OK).json('success');
      
    }
  
    @Put()
    updateFeedback(@Body() feedback: FeedbackDto, @Res() res) {
      try {
        const updatedFeedback = this.feedbackDbService.updateFeedback(feedback.id);
        return res.status(HttpStatus.OK).json(updatedFeedback.id);
      } catch(e) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message);
      }
    }
}