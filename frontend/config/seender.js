// const readXlsxFile = require('read-excel-file/node');


// const schema = {
//     'id': {
//         prop: 'id',
//         type: Number
//         // Excel stores dates as integers.
//         // E.g. '24/03/2018' === 43183.
//         // Such dates are parsed to UTC+0 timezone with time 12:00 .
//     },
//     'NAME': {
//         prop: 'name',
//         type: String,
//         required: true
//     },
//     // 'COURSE' is not a real Excel file column name,
//     // it can be any string — it's just for code readability.
//     'ADDRESS': {
//         prop: 'address',
//         type: String
//     },
//     'CITY': {
//         prop: 'city',
//         type: String
//     },
//     'Type of school': {
//         prop: 'Type of school',
//         type: String
//     },
//     'ZIP': {
//         prop: 'ZIP',
//         type: Number
//     },
//     'COUNTY': {
//         prop: 'ZIP',
//         type: String
//     },
//     'WEBSITE': {
//         prop: 'WEBSITE',
//         type: String
//     },
// }




// const importData = async () => {

//     try {
//         const data = await readXlsxFile(file, { getSheets: true }).then((sheets) => {
//             // sheets === [{ name: 'Sheet1' }, { name: 'Sheet2' }]

//         })

//     } catch (error) {
//         console.log(error);
//     }
// }


// importData()

const importData = async () => {
    try {
        var XLSX = require('xlsx')
        var workbook = XLSX.readFile('Colleges_and_Universities_Clean.xlsx');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        console.log(xlData);
        const res = await axios.post('http://localhost:1337/students', xlData)
        console.log(res);
    } catch (error) {

    }
}
importData()