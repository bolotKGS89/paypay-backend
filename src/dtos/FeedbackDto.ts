import {Comment} from '../enum/Comment'

export interface FeedbackDto {
    id?: number;
    comment: Comment; 
    feedbackText: string;
}