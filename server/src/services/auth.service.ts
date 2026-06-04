import bcrypt from 'bcrypt';
import { prisma } from './prisma.js';
import { signToken } from './jwt.js';
import { AppError } from '../errors/AppError.js';

export async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new AppError('User already exists', 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hash_password: hashedPassword,
    },
  });

  const token = signToken({ userId: user.id, email: user.email });
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  };
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new AppError('Invalid email or password', 401);
  }

  const isPasswordValid = await bcrypt.compare(password, user.hash_password);

  if (!isPasswordValid) {
    throw new AppError('Invalid email or password', 401);
  }

  const token = signToken({ userId: user.id, email: user.email });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  };
}
