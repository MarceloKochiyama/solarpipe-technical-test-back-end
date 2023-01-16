import { Module } from '@nestjs/common';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [EmployeesModule],
})
export class AppModule {}
