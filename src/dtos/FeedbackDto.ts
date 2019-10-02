import {Comment} from '../enum/Comment'

export interface FeedbackDto {
    id?: number;
    name: string;
    comment: Comment; 
    feedbackText: string;
}