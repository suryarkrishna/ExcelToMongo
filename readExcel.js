const XLSX = require('xlsx');

const workbook = XLSX.readFile("assets/excelfile.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json(worksheet);

console.log(jsonData);

module.exports = jsonData;

