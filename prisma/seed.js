const { PrismaClient } = require('@prisma/client')
const { hash } = require("bcrypt");

const prisma = new PrismaClient()

async function main() {
  const password = await hash('pa$$word', 12);
  const user = await prisma.user.upsert({
    where: { email: 'junelleXIII@gmail.com' },
    update: {},
    create: {
      email: 'junelleXIII@gmail.com',
      name: 'Junelle Suaybaguio',
      password,
    },
  });
  console.log(user)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })