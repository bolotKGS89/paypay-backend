import { Injectable } from '@nestjs/common';
import {FeedbackDto} from '../dtos/FeedbackDto';
import { Comment } from '../enum/Comment';

@Injectable()
export class FeedbackDbService {
  private FEEDBACK_LIST:
      Array<FeedbackDto>
      = [
      {id: 1, name: 'Jon Jones', comment: Comment.INEXPERIENCED, feedbackText: 'Good dev'},
      {id: 2, name: 'Jacques Audiard', comment: Comment.NOT_BAD, feedbackText: 'Average manager'},
      {id: 3, name: 'Sergey Ivanov', comment: Comment.NOT_BAD, feedbackText: 'Newbie'},
      {id: 4, name: 'Carlos Saucedo', comment: Comment.WELL_DONE, feedbackText: 'Talented tester'},
      {id: 5, name: 'Thomas Wurz', comment: Comment.WELL_DONE, feedbackText: 'Good dev'}
    ];

  getAllEmployees(): Array<FeedbackDto> {
    return this.FEEDBACK_LIST;
  }

  deleteEmployee(employeeId: number): FeedbackDto {
      return this.FEEDBACK_LIST.find((employee) => employee.id === Number(employeeId));
  }

  updateEmployee(employeeId: number): FeedbackDto {
    return this.FEEDBACK_LIST.find((employee) => employee.id === Number(employeeId));
  }
}