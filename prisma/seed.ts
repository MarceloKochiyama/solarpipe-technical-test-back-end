import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.employee.create({
    data: {
      email: 'tester@solarpipe.com.br',
      name: 'SolarDev',
      passwordHash: bcrypt.hashSync('Solarpipe2022', 8),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
