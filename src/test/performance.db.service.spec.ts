import { PerformanceDbService } from '../admin/performance.db.service';

describe('PerformanceService', () => {
    let performanceService: PerformanceDbService;

    beforeAll(() => {
        performanceService = new PerformanceDbService();
    });

    describe('methods', () => {
        it('should return an array of performance', () => {
            expect(performanceService.getAllPeformance()).toBeDefined();
            expect(performanceService.getAllPeformance().length).toBeGreaterThanOrEqual(1);
        });

        it('should delete one performance', () => {
            expect(performanceService.deletePeformance(1)).toMatchObject({employeeName: 'Jon Jones'})
        });

        it('should delete another performance', () => {
            expect(performanceService.deletePeformance(2)).toMatchObject({grade: 6})
        });

        it('should update an performance', () => {
            expect(performanceService.updatePeformance(4)).toMatchObject({grade: 10})
        });
    });
});