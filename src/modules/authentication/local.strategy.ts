import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { EmployeeEntity } from '../employees/entities/employee.entity';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authenticationService: AuthenticationService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<EmployeeEntity> {
    const { error, employee } =
      await this.authenticationService.validateEmployee(email, password);

    if (!employee || error) {
      throw new HttpException(error, HttpStatus.UNAUTHORIZED);
    }

    return employee;
  }
}
