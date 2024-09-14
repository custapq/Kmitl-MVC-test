const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getMilk = async (req, res) => {
    try {
        const milks = await prisma.milk.findMany();
        res.json(milks);
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
};


const getMilkById = async (req, res) => {
    const { id } = req.params;
    try {
        const milk = await prisma.milk.findUnique({
            where: { id: parseInt(id) }, 
        });

        if (milk) {
            res.json(milk);
        } else {
            res.status(404).json({ error: "Milk not found" });
        }
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: "error", details: error.message });
    }
};


const updateMilk = async (req, res) => {
    const { id } = req.params;  
    const updateData = req.body;

    try {
        const updatedMilk = await prisma.milk.update({
            where: { id: parseInt(id) }, 
            data: updateData,
        });

        res.json(updatedMilk);
    } catch (error) {
        console.error('Error updating milk:', error);
        res.status(500).json({ error: 'Error updating milk' });
    }
};

module.exports = {
    getMilkById,
    getMilk,
    updateMilk,
};
