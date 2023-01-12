import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(uuid: string) {
    return `This action returns a #${uuid} employee`;
  }

  update(uuid: string, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${uuid} employee`;
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} employee`;
  }
}
