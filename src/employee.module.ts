import { Module } from '@nestjs/common';

import {FeedbackController} from './employee/feedback.controller'
import {FeedbackDbService} from './employee/feedback.db.service';


@Module({
    imports: [],
    controllers: [FeedbackController],
    providers: [FeedbackDbService],
})
export class EmployeeModule{}