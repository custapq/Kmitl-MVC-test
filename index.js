const express = require('express');
const path = require('path');
const { getCowByCode,getCow, updateCow } = require('./src/controller/cowController');
const { getMilk,getMilkById,updateMilk } = require('./src/controller/milkController');

const app = express();
const port = 3000;

app.use(express.json());

// ตั้งค่า api endpoint
app.get('/api/cow/:code', getCowByCode);
app.put('/api/cow/:code', updateCow);
app.get('/api/cow', getCow);
app.get('/api/milk/:id', getMilkById);
app.put('/api/milk/:id', updateMilk);
app.get('/api/milk', getMilk);

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
