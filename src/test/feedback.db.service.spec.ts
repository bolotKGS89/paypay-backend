import { FeedbackDbService } from '../employee/feedback.db.service';

describe('PerformanceService', () => {
    let feedbackService: FeedbackDbService;

    beforeAll(() => {
        feedbackService = new FeedbackDbService();
    });

    describe('methods', () => {
        it('should return an array of feedbacks', () => {
            expect(feedbackService.getAllFeedbacks()).toBeDefined();
            expect(feedbackService.getAllFeedbacks().length).toBeGreaterThanOrEqual(1);
        });

        it('should delete one feedback', () => {
            expect(feedbackService.deleteFeedback(1)).toMatchObject({name: 'Jon Jones'})
        });

        it('should delete another feedback', () => {
            expect(feedbackService.deleteFeedback(2)).toMatchObject({name: 'Jacques Audiard'})
        });

        it('should update a feedback', () => {
            expect(feedbackService.deleteFeedback(4)).toMatchObject({name: 'Carlos Saucedo'})
        });
    });
});