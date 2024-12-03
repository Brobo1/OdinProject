const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //     posts: {
  //       create: { title: "hellooooo" },
  //     },
  //     profile: {
  //       create: { bio: "I like tutel" },
  //     },
  //   },
  // });
  //
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // });
  // console.dir(allUsers, { depth: null });
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });

  console.log(post);
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
