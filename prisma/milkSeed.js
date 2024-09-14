const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.milk.createMany({
        data: [
            { name: "milk", total: 0 },
            { name: "chocolateMilk", total: 0 },
            { name: "sourMilk", total: 0 }
        ]
    });

    console.log("add milk complete");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
