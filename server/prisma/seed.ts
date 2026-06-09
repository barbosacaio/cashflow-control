import { prisma } from '../src/services/prisma';
import bcrypt from 'bcrypt';

async function main() {
  await prisma.user.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: 'Admin',
      email: 'admin@cashflowcontrol.com',
      hash_password: await bcrypt.hash('123456', 10),
    },
  });
  await prisma.category.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: 'Food & Groceries',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      name: 'Transportation',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '3' },
    update: {},
    create: {
      id: '3',
      name: 'Housing',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '4' },
    update: {},
    create: {
      id: '4',
      name: 'Dining Out',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '5' },
    update: {},
    create: {
      id: '5',
      name: 'Utilities',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '6' },
    update: {},
    create: {
      id: '6',
      name: 'Healthcare',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '7' },
    update: {},
    create: {
      id: '7',
      name: 'Hygiene & Personal Care',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '8' },
    update: {},
    create: {
      id: '8',
      name: 'Clothing & Accessories',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '9' },
    update: {},
    create: {
      id: '9',
      name: 'Entertainment',
      userId: '1',
    },
  });
  await prisma.category.upsert({
    where: { id: '10' },
    update: {},
    create: {
      id: '10',
      name: 'Education',
      userId: '1',
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
