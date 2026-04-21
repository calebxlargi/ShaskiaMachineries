const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  await prisma.machine.create({
    data: {
      title: "Test Machine 2",
      slug: "test-machine-2",
      category: "Test",
      description: "Test",
      specs: "{}",
      images: "[]"
    }
  });
  console.log("Success with no args");
}
main().catch(console.error);
