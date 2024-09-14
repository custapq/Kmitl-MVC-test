const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const generateRandomCode = () => {
        const code = Math.floor(Math.random() * 90000000) + 10000000;
        return code;
    };

    const colors = ['white', 'brown'];

    for (let i = 0; i < 10; i++) { 
        await prisma.Cow.create({
            data: {
                code: generateRandomCode(),
                color: colors[Math.floor(Math.random() * colors.length)],
                year: Math.floor(Math.random() * 10) + 1,
                month: Math.floor(Math.random() * 12) + 1,
                isBSOD: false,
                lemonFed: false,
                totalMilk: 0
            }
        });
    }

    console.log("Data seeding completed");
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
