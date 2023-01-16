import { Injectable } from '@nestjs/common';
import { EmployeesService } from '../employees/employees.service';
import { EmployeeEntity } from '../employees/entities/employee.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly employeesService: EmployeesService,
  ) {}

  async validateEmployee(
    email: string,
    pass: string,
  ): Promise<{ employee?: EmployeeEntity; error?: string }> {
    const employee = await this.employeesService.findOne({
      email,
    });

    if (!employee)
      return {
        error: 'Email not registered',
      };

    if (!(await bcrypt.compare(pass, employee.passwordHash)))
      return {
        error: 'Password Does Not Match',
      };

    return {
      employee,
    };
  }

  signIn(employee: EmployeeEntity) {
    return {
      access_token: this.jwtService.sign({
        uuid: employee.uuid,
      }),
      employeeUuid: employee.uuid,
    };
  }
}
