const express = require('express');
const ExcelJS = require('exceljs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/download', async (req, res) => {
    // 创建新的工作簿
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('My Sheet');

    // 添加一些数据
    worksheet.columns = [
        { header: '文本变动信息', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: '', key: 'dob', width: 15 },
        { header: 'D.O.B.', key: 'dob', width: 15 },
        { header: 'D.O.B.', key: 'dob', width: 15 },
    ];

    worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
    worksheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });

    // 设置响应头
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader("Content-Disposition", "attachment; filename=" + "report.xlsx");

    // 发送Excel文件给客户端
    await workbook.xlsx.write(res);
    res.end();
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});