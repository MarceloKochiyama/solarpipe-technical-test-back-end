import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthenticationModule, EmployeesModule],
})
export class AppModule {}
