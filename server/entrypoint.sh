#!/bin/sh

echo "Waiting for database..."
until npx prisma migrate deploy 2>&1 | grep -v "connection"; do
  echo "Database not ready, retrying in 2s..."
  sleep 2
done

npx prisma generate
npm run dev