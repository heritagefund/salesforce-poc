import jsforce = require('jsforce');
import uuid = require('uuid/v1')

export class SalesforcePortalClient {
  salesforceConsumerKey: string;
  salesforceConsumerSecret: string;
  salesforceUsername: string;
  salesforcePassword: string;
  constructor(salesforceConsumerKey: string, salesforceConsumerSecret: string, salesforceUsername: string, salesforcePassword: string) {
    this.salesforceConsumerKey = salesforceConsumerKey,
      this.salesforceConsumerSecret = salesforceConsumerSecret,
      this.salesforceUsername = salesforceUsername,
      this.salesforcePassword = salesforcePassword
  }


  private getConnection(): jsforce.Connection {
    return new jsforce.Connection({
      oauth2: {
        clientId: this.salesforceConsumerKey,
        clientSecret: this.salesforceConsumerSecret,
        redirectUri: 'http://localhost:3000/callback',
        loginUrl: 'https://test.salesforce.com'
      }
    })
  }

  private async login(): Promise<jsforce.Connection> {
    let conn = this.getConnection()
    await conn.login(this.salesforceUsername, this.salesforcePassword)
    return conn
  }

  async getInstanceId(): Promise<string> {
    return this.login().then(l => l.instanceUrl)
  }

  async postApexRest(projectTitle: string, organisationName: string): Promise<any> {
    return await this.login().then(l => l.apex.post('/loadData/', this.buildPayload(organisationName, projectTitle)))
  }

  private buildPayload = (organisationName: string, projectName: string) => {
    return {
      "meta": {
        "form": "3-10k-grant",
        "schemaVersion": "v1.x",
        "environment": "production",
        "commitId": "b4ecf18eae01d34b296e9388f387cc42bf7c0f93",
        "locale": "en",
        "username": "example@example.com",
        "applicationId": uuid(),
        "startedAt": "2019-05-17T15:34:13.000Z"
      },
      "application": {
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
        "projectTotalCosts": 20000,
        "organisationName": organisationName,
        "organisationAddress": {
          "line1": "82553 Demarco Rapid",
          "townCity": "Waelchitown",
          "county": "Berkshire",
          "postcode": "B15 1TR"
        },
        "organisationType": "not-for-profit-company",
        "companyNumber": "123456789",
        "charityNumber": null,
        "charityNumberNi": null,
        "mainContactName": "Nelda",
        "mainContactDateOfBirth": "1975-10-12",
        "mainContactAddress": {
          "line1": "41465 Bashirian Oval",
          "townCity": "Friesenhaven",
          "county": "Berkshire",
          "postcode": "B15 1TR"
        },
        "mainContactEmail": "Lizzie87@example.com",
        "mainContactPhone": "0345 4 10 20 30",
        "authorisedSignatoryRole": "trustee",
        "authorisedSignatoryName": "Jane Doe",
        "authorisedSignatoryPhone": "07777 777777"
      }
    }
  }
}