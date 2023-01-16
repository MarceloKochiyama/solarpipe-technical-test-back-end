export class EmployeeEntity {
  uuid: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;

  constructor(partial: Partial<EmployeeEntity>) {
    Object.assign(this, partial);
  }
}
