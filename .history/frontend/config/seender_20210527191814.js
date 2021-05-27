const CSVTOJSON = require('csvtojson')
const axios = require('axios')
const fetch = require('node-fetch')

const importData = async () => {
    const data = await CSVTOJSON().fromFile('Colleges.csv')


    for (let index = 0; index < data.length; index++) {
        const postUser = data[index]
        const strapiRes = await fetch(`http://localhost:1337/Universities`, {
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

    // for (let index = 0; index < 2; index++) {
    //     const postUser = data[index].Degrees
    //     console.log(postUser);
    const postUser = data[1].Degrees

    // const strapiRes = await fetch(`http://localhost:1337/DEGREES`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         degree: postUser.Degrees,

    //     }),
    // })
    // const res = await strapiRes.json()
    // console.log(res);

    //     }).then((result) => {
    //         console.log(result);
    //     })
    //}

    axios
        .post('http://localhost:1337/DEGREES', {
            degree: postUser.Degrees,

        })
        .then(response => {
            console.log(response);
        });

}
importData()
// importDegrees()
// data: {
