const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getCowByCode = async (req, res) => {
    const { code } = req.params;
    try {
        const cow = await prisma.cow.findUnique({
            where: { 
                code: parseInt(code) 
            }
        });

        if (cow) {
            res.json(cow);
        } else {
            res.status(404).json({ error: "Cow not found" });
        }
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: "An error occurred", details: error.message });
    }
};

const updateCow = async (req, res) => {
    const code = parseInt(req.params.code, 10);
    const updateData = req.body;

    try {
        const updatedCow = await prisma.cow.update({
            where: { code: code },
            data: updateData,
        });

        res.json(updatedCow);
    } catch (error) {
        console.error('Error updating cow:', error);
        res.status(500).json({ error: 'Error updating cow' });
    }
};


const getCow = async (req, res) => {
    try {
        const cows = await prisma.cow.findMany();
        res.json(cows);
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
};

module.exports = {
    getCowByCode,
    getCow,
    updateCow,
};
