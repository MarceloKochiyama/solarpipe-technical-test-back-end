import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeEntity } from './entities/employee.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeEntity | undefined> {
    const existentEmployee = await this.prisma.employee.findFirst({
      where: { email: createEmployeeDto.email },
    });

    if (existentEmployee) return;

    const employee = await this.prisma.employee.create({
      data: {
        email: createEmployeeDto.email,
        name: createEmployeeDto.name,
        passwordHash: bcrypt.hashSync(createEmployeeDto.password, 8),
      },
    });

    return new EmployeeEntity(employee);
  }

  async findAll(where?: Partial<EmployeeEntity>): Promise<EmployeeEntity[]> {
    const employees = await this.prisma.employee.findMany({
      where,
    });

    return employees.map((employee) => new EmployeeEntity(employee));
  }

  async findOne(
    where?: Partial<EmployeeEntity>,
  ): Promise<EmployeeEntity | undefined> {
    const employee = await this.prisma.employee.findFirst({
      where,
    });

    if (!employee) return;

    return new EmployeeEntity(employee);
  }

  async update(
    uuid: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeEntity | undefined> {
    const existentEmployee = await this.prisma.employee.findUnique({
      where: { uuid },
    });

    if (!existentEmployee) return;

    const updatedEmployee = await this.prisma.employee.update({
      where: { uuid },
      data: updateEmployeeDto,
    });

    return new EmployeeEntity(updatedEmployee);
  }

  async remove(uuid: string): Promise<EmployeeEntity | undefined> {
    const existentEmployee = await this.prisma.employee.findUnique({
      where: { uuid },
    });

    if (!existentEmployee) return;

    const deletedEmployee = await this.prisma.employee.delete({
      where: { uuid },
    });

    return new EmployeeEntity(deletedEmployee);
  }
}
