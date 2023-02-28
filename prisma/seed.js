const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
let vijay_hash = null;
let war_hash = null;
bcrypt.genSalt(7).then(salt => bcrypt.hash('vij@hat1', salt)).then(res => {
  users[0].password_hash= res;
  bcrypt.genSalt(7).then(salt => bcrypt.hash('war12345', salt)).then(res => {
    users[1].password_hash = res
    main()
      .then(async () => {
        await prisma.$disconnect()
      })
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      })
      console.log(vijay_hash)

  });

}
);


const users = [
  {
    email: "svijayaraagavan@gmail.com",
    name: "vijay",
    password_hash: vijay_hash,
    profile: {
      create: {
        name: "vijay",
        age: 23,
        dob: "13/11/2000",
        phoneNo: "9344811811",
        locality: "chennai",
        active: true
      }
    }
  },
  {
    email: "warlock@gmail.com",
    name: "warlock",
    password_hash: war_hash,
    profile: {
      create: {
        name: "warlock",
        age: 25,
        dob: "20/11/2000",
        phoneNo: "9092126187",
        locality: "Banglore",
        active: false
      }
    }
  }
]

async function main() {
  // const alice = await prisma.user.upsert({
  //   update: {},
  //   create: {
  //     email: 'alice@prisma.io',
  //     name: 'Alice',
  //     posts: {
  //       create: {
  //         title: 'Check out Prisma with Next.js',
  //         content: 'https://www.prisma.io/nextjs',
  //         published: true,
  //       },
  //     },
  //   },
  // })
  users.forEach(async (item) => {
    const alice = await prisma.User.create({
      data: item,
    })
    console.log({ alice })
  })
}

