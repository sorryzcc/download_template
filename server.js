const express = require('express');
const ExcelJS = require('exceljs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/download', async (req, res) => {
    // 读取现有的工作簿
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(path.resolve(__dirname, '导入模板.xlsx'));

    // 获取第一个工作表
    const worksheet = workbook.getWorksheet(1);



    // 清除现有行并添加新行
    worksheet.spliceRows(1, worksheet.rowCount); // 删除所有行
    worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
    worksheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });

    // 设置响应头
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader("Content-Disposition", "attachment; filename=" + "ImportTemplate.xlsx");

    // 发送修改后的Excel文件给客户端
    await workbook.xlsx.write(res);
    res.end();
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});