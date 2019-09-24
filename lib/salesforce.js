"use strict";
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
// export const buildPayload = (organisationName: string, projectName: string) => {
//     return {
//         "meta": {
//             "form": "3-10k-grant",
//             "schemaVersion": "v1.x",
//             "environment": "production",
//             "commitId": "b4ecf18eae01d34b296e9388f387cc42bf7c0f93",
//             "locale": "en",
//             "username": "example@example.com",
//             "applicationId": "e9ae2cc4-fd7b-4fe5-bd55-17317a288fd4",
//             "startedAt": "2019-05-17T15:34:13.000Z"
//         },
//         "application": {
//             "projectName": projectName,
//             "projectDateRange": {
//                 "startDate": "2020-12-12",
//                 "endDate": "2020-12-12"
//             },
//             "projectAddress": {
//                 "projectPostcode": "B15 1TR",
//                 "line1": "82553 Demarco Rapid",
//                 "townCity": "Waelchitown",
//                 "county": "Berkshire"
//             },
//             "yourIdeaProject": "Free text…",
//             "projectTotalCosts": 20000,
//             "organisationName": organisationName,
//             "organisationAddress": {
//                 "line1": "82553 Demarco Rapid",
//                 "townCity": "Waelchitown",
//                 "county": "Berkshire",
//                 "postcode": "B15 1TR"
//             },
//             "organisationType": "not-for-profit-company",
//             "companyNumber": "123456789",
//             "charityNumber": null,
//             "charityNumberNi": null,
//             "mainContactName": "Nelda",
//             "mainContactDateOfBirth": "1975-10-12",
//             "mainContactAddress": {
//                 "line1": "41465 Bashirian Oval",
//                 "townCity": "Friesenhaven",
//                 "county": "Berkshire",
//                 "postcode": "B15 1TR"
//             },
//             "mainContactEmail": "Lizzie87@example.com",
//             "mainContactPhone": "0345 4 10 20 30",
//             "authorisedSignatoryRole": "trustee",
//             "authorisedSignatoryName": "Jane Doe",
//             "authorisedSignatoryPhone": "07777 777777"
//         }
//     }
// }
// export async function auth(): Promise<any> {
//     require('./lib/env');
//     const nforce = require('nforce');
//     const org = nforce.createConnection({
//         clientId: process.env.SALESFORCE_CONSUMER_KEY,
//         clientSecret: process.env.SALESFORCE_CONSUMER_SECRET,
//         redirectUri: 'http://localhost:3000/oauth/_callback',
//         environment: 'sandbox'
//     });
//     return await org.authenticate({
//         username: process.env.SALESFORCE_USERNAME,
//         password: process.env.SALESFORCE_PASSWORD
//     })
// }
// //         .then((oauth:  any) => org.apexRest({ oauth: oauth, uri: 'loadData', method: 'POST', body: JSON.stringify(buildPayload('Goldberg Enterprises', 'Cool Project')) }));
// // };
