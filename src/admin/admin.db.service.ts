import { Injectable } from '@nestjs/common';
import {EmployeeDto} from '../dtos/EmployeeDto';

@Injectable()
export class AdminDbService {
  private EMPLOYEE_LIST:
      Array<EmployeeDto>
      = [
      {id: 1, name: 'Jon Jones', position: 'Developer', experience: 2, nationality: 'USA'},
      {id: 2, name: 'Jacques Audiard', position: 'Tester', experience: 2, nationality: 'FR'},
      {id: 3, name: 'Sergey Ivanov', position: 'Project Manager', experience: 5, nationality: 'RU'},
      {id: 4, name: 'Carlos Saucedo', position: 'Scrum Master', experience: 1, nationality: 'ES'},
      {id: 5, name: 'Thomas Wurz', position: 'Product owner', experience: 6, nationality: 'DE'}
    ];

  getAllEmployees(): Array<EmployeeDto> {
    return this.EMPLOYEE_LIST;
  }

  deleteEmployee(employeeId: number): EmployeeDto {
      return this.EMPLOYEE_LIST.find((employee) => employee.id === Number(employeeId));
  }

  updateEmployee(employeeId: number): EmployeeDto {
    return this.EMPLOYEE_LIST.find((employee) => employee.id === Number(employeeId));
  }
}
