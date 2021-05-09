const CSVTOJSON = require('csvtojson')
const axios = require('axios')
const fetch = require('node-fetch')

const importData = async () => {
    const data = await CSVTOJSON().fromFile('Colleges.csv')


    for (let index = 0; index < data.length; index++) {
        const postUser = data[index]
        const strapiRes = await fetch(`http://localhost:1337/usa-universities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                NAME: postUser.NAME,
                ADDRESS: postUser.ADDRESS,
                CITY: postUser.CITY,
                STATE: postUser.NAME,
                'Type_of_school': postUser.NAME,
                ZIP: postUser.ZIP,
                TELEPHONE: postUser.TELEPHONE,
                COUNTY: postUser.COUNTY,
                COUNTYFIPS: postUser.COUNTYFIPS,
                COUNTRY: postUser.COUNTRY,
                WEBSITE: postUser.WEBSITE,
                ALIAS: postUser.ALIAS,
                TOTAL_ENROLLMENT: postUser.TOTAL_ENROLLMENT
            }),

        }).then((result) => {
            console.log("Success");
        })


    }
}
const importDegrees = async () => {
    const data = await CSVTOJSON().fromFile('degrees.csv')
    console.log();

    for (let index = 0; index < data.length; index++) {
        const postUser = data[index].Degrees
        const strapiRes = await fetch(`http://localhost:1337/DEGREES`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Degrees: postUser.Degrees,

            }),

        }).then((result) => {
            console.log("Success");
        })
    }

}
// importData()
importDegrees()
// data: {
