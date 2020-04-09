import uuid = require('uuid')

export enum FormType {
    ThreeToTenGrant = "3-10k-grant",
    PermissionToStart = "permission-to-start",
}

export function buildPayload(formType: string, applicationId: string, organisationName?: string, projectName?: string) {
    switch (formType) {
        case '3-10k-grant':
            return {
                "meta": {
                    "form": "3-10k-grant",
                    "schemaVersion": "v1.x",
                    "environment": "production",
                    "commitId": "b4ecf18eae01d34b296e9388f387cc42bf7c0f93",
                    "locale": "en",
                    "username": "example@example.com",
                    "applicationId": applicationId,
                    "startedAt": "2019-05-17T15:34:13.000Z"
                },
                "application": {
                    "isPartnership": false,
                    "keepInformed": false,
                    "involveInResearch": false,
                    "projectName": projectName,
                    "projectDateRange": {
                        "startDate": "2020-12-12",
                        "endDate": "2020-12-12"
                    },
                    "projectAddress": {
                        "projectPostcode": "B15 1TR",
                        "line1": "82553 Demarco Rapid",
                        "townCity": "Waelchitown",
                        "county": "Berkshire"
                    },
                    "yourIdeaProject": "Free text…",
                    "projectDifference": "More free text",
                    "projectCommunity": "Even more free text",
                    "projectOrgBestPlace": "Even more and more free text",
                    "projectAvailable": "Even more more more text",
                    "projectCapitalWork": true,
                    "projectOutcome1": "More and more and more free text",
                    "projectOutcome2": "More and more and more free text",
                    "projectOutcome2Checked": true,
                    "projectOutcome3": "More and more and more free text",
                    "projectOutcome3Checked": true,
                    "projectOutcome4": "More and more and more free text",
                    "projectOutcome4Checked": true,
                    "projectOutcome5": "More and more and more free text",
                    "projectOutcome5Checked": true,
                    "projectOutcome6": "More and more and more free text",
                    "projectOutcome6Checked": true,
                    "projectOutcome7": "More and more and more free text",
                    "projectOutcome7Checked": false,
                    "projectOutcome8": "More and more and more free text",
                    "projectOutcome8Checked": false,
                    "projectOutcome9": null,
                    "projectOutcome9Checked": false,
                    "projectCosts": [
                        {
                            "costId": uuid(),
                            "costType": "new-staff",
                            "costDescription": "Free text",
                            "costAmount": 1000
                        },
                        {
                            "costId": uuid(),
                            "costType": "professional-fees",
                            "costDescription": "Free text",
                            "costAmount": 1000
                        }
                    ],
                    "projectVolunteers": [
                        {
                            "description": "free text",
                            "hours": 10
                        },
                        {
                            "description": "more free text",
                            "hours": 20
                        }
                    ],
                    "nonCashContributions": [
                        {
                            "description": "Free text",
                            "estimatedValue": 1000,
                            "secured": "yes-with-evidence"
                        },
                        {
                            "description": "More free text",
                            "estimatedValue": 2000,
                            "secured": "not-sure"
                        }
                    ],
                    "cashContributions": [
                        {
                            "description": "free text",
                            "secured": "yes-with-evidence",
                            "amount": 1000,
                            "id": uuid()
                        },
                        {
                            "description": "free text",
                            "secured": "no",
                            "amount": 1000,
                            "id": uuid()
                        },
                        {
                            "description": "free text",
                            "secured": "not-sure",
                            "amount": 1000,
                            "id": uuid()
                        },
                        {
                            "description": "free text",
                            "secured": "yes-no-evidence-yet",
                            "amount": 1000,
                            "id": uuid()
                        }
                    ],
                    "organisationId": uuid(),
                    "organisationName": organisationName,
                    "organisationMission": ["black-or-minority-ethnic-led", "disability-led", "lgbt+-led", "female-led", "young-people-led"],
                    "organisationAddress": {
                        "line1": "82553 Demarco Rapid",
                        "townCity": "Waelchitown",
                        "county": "Berkshire",
                        "postcode": "B15 1TR"
                    },
                    "organisationType": "local-authority",
                    "companyNumber": "123456789",
                    "charityNumber": null,
                    "charityNumberNi": null,
                    "mainContactName": "Nelda",
                    "mainContactDateOfBirth": "1975-10-12",
                    "mainContactAddress": {
                        "line1": "41465 Bashirian Oval",
                        "county": "Berkshire",
                        "postcode": "B15 1TR"
                    },
                    "authorisedSignatoryOneDetails": {
                        "role": "trustee",
                        "name": "Jane Doe",
                        "phone": "07777 777777",
                        "email": "jane1@example.com",
                        "isAlsoApplicant": false
                    },
                    "authorisedSignatoryTwoDetails": {
                        "role": "trustee",
                        "name": "Jane Doe",
                        "phone": "07777 777777",
                        "email": "Lizzie87@example.com",
                        "isAlsoApplicant": true
                    },
                    "mainContactEmail": "Lizzie87@example.com",
                    "mainContactPhone": "0345 4 10 20 30"
                }
            }
        case 'completion-report':
            return {
                "meta": {
                    "form": "completion-report",
                    "schemaVersion": "v1.x",
                    "environment": "production",
                    "commitId": "b4ecf18eae01d34b296e9388f387cc42bf7c0f93",
                    "locale": "en",
                    "username": "example@example.com",
                    "applicationId": applicationId,
                    "startedAt": "2019-05-17T15:34:13.000Z"
                },
                "application": {
                    "summaryOfAcheivements": [
                        {
                            "approvedPurpose": "Approved purpose 1",
                            "summaryOfAcheivements": "free text"
                        },
                        {
                            "approvedPurpose": "Approved purpose 2",
                            "summaryOfAcheivements": "free text"
                        }
                    ],
                    "changesToApprovedPurposes": [
                        {
                            "descriptionOfChange": "Free text",
                            "dateOfRequest": "2019-01-01",
                            "dateOfReply": "2019-01-01",
                            "effectOfChange": "Free text"
                        },
                        {
                            "descriptionOfChange": "Free text 2",
                            "dateOfRequest": "2019-01-01",
                            "dateOfReply": "2019-01-01",
                            "effectOfChange": "Free text"
                        }
                    ],
                    "howProjectAcheivedOutcomes": "Free text",
                    "contributions": [
                        {
                            "date": "2019-01-01",
                            "taskDescription": "free text",
                            "numberOfVolunteers": 10,
                            "volunteerHours": 2000
                        },
                        {
                            "date": "2019-01-01",
                            "taskDescription": "free text",
                            "numberOfVolunteers": 10,
                            "volunteerHours": 2000
                        },
                        {
                            "date": "2019-01-01",
                            "taskDescription": "free text",
                            "numberOfVolunteers": 10,
                            "volunteerHours": 2000
                        },
                        {
                            "date": "2019-01-01",
                            "taskDescription": "free text",
                            "numberOfVolunteers": 10,
                            "volunteerHours": 2000
                        }
                    ],
                    "staff": [
                        {
                            "post": "free text",
                            "dateAdvertised": "2019-01-01",
                            "dateAppointed": "2019-01-01",
                            "salary": 10000
                        }
                    ],
                    "staffLinked": "Yes",
                    "howCostsSpent": [
                        {
                            "costHeading": "professional-fees",
                            "invoiceReference": "free text",
                            "invoiceDate": "2019-01-01",
                            "description": "free text",
                            "totalInvoice": 1000,
                            "totalCostClaimed": 2000
                        },
                        {
                            "costHeading": "New staff costs",
                            "invoiceReference": "free text",
                            "invoiceDate": "2019-01-01",
                            "description": "free text",
                            "totalInvoice": 1000,
                            "totalCostClaimed": 2000
                        }
                    ],
                    "explainSpendingChanges": "free text",
                    "fundingAcknowledgement": "free text",
                    "completedEvaluation": "Yes"
                }
            }
        default: throw new Error('Unknown type')
    }
}  