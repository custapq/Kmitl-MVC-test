const express = require('express');
const path = require('path');
const { getCowByCode,getCow, updateCow } = require('./src/controller/cowController');
const { getMilk,getMilkById,updateMilk } = require('./src/controller/milkController');

const app = express();
const port = 3000;

app.use(express.json());

// ตั้งค่า api endpoint
app.get('/api/cow/:code', getCowByCode); // ดึงข้อมูลวัวแต่ละตัว
app.put('/api/cow/:code', updateCow); // แก้ไขข้อมูลวัวแต่ละตัว
app.get('/api/cow', getCow); // ดึงข้อมูลวัวทุกตัว
app.get('/api/milk/:id', getMilkById); // แก้ไขข้อมูลนมแต่ละประเภท
app.put('/api/milk/:id', updateMilk); // แก้ไขข้อมูลมแต่ละประเภท
app.get('/api/milk', getMilk); // ดึงข้อมูลนมทุกประเภท

// กำหนด path เริ่มต้น
app.get('/', function(req,res){ 
    res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
