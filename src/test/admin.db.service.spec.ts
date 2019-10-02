import { AdminDbService } from '../admin/admin.db.service';

describe('AdminService', () => {
    let adminService: AdminDbService;

    beforeAll(() => {
        adminService = new AdminDbService();
    });

    describe('methods', () => {
        it('should return an array of employees', () => {
            expect(adminService.getAllEmployees()).toBeDefined();
            expect(adminService.getAllEmployees().length).toBeGreaterThanOrEqual(1);
        });

        it('should delete one employee', () => {
            expect(adminService.deleteEmployee(1)).toMatchObject({name: 'Jon Jones'})
        });

        it('should delete another employee', () => {
            expect(adminService.deleteEmployee(2)).toMatchObject({position: 'Tester'})
        });

        it('should update an employee', () => {
            expect(adminService.deleteEmployee(4)).toMatchObject({experience: 1})
        });
    });
});