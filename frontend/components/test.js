const CSVTOJSON = require('csvtojson')
const csvFilePath = require('./Colleges.csv')

async function test() {
    CSVTOJSON().fromFile(csvFilePath).then(
        user => {
            return user
        }
    )

}
export default test