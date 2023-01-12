import { Module } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [AuthenticationModule, EmployeesModule],
})
export class AppModule {}
