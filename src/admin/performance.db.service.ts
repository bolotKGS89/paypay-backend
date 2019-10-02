import { Injectable } from '@nestjs/common';
import {PerformanceDto} from '../dtos/PerformanceDto';
import {Comment} from '../enum/Comment'

@Injectable()
export class PerformanceDbService {
  private REVIEW_LIST:
  Array<PerformanceDto>
  = [
  {id: 1, grade: 3, date: new Date().toDateString(), employeeName: 'Jon Jones', comment: Comment.INEXPERIENCED},
  {id: 2, grade: 6, date: new Date().toDateString(), employeeName: 'Jacques Audiard', comment: Comment.NOT_BAD},
  {id: 3, grade: 7, date: new Date().toDateString(), employeeName: 'Sergey Ivanov', comment: Comment.BAD},
  {id: 4, grade: 10, date: new Date().toDateString(), employeeName: 'Carlos Saucedo', comment: Comment.NOT_BAD},
  {id: 5, grade: 6, date: new Date().toDateString(), employeeName: 'Thomas Wurz', comment: Comment.NOT_BAD}
];

  getAllPeformance(): Array<PerformanceDto> {
    return this.REVIEW_LIST;
  }

  deletePeformance(id: number): PerformanceDto {
    return this.REVIEW_LIST.find((performance) => performance.id === Number(id));
  }

  updatePeformance(id: number): PerformanceDto {
    return this.REVIEW_LIST.find((performance) => performance.id === Number(id));
  }
}