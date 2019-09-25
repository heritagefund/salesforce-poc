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

  private streamPrettifier(message: any) {
    // const example = { "schema": "idzQ0I-adgCfqNzILegnJg", "payload": { "LastModifiedDate": "2019-09-25T10:32:28Z", "AccountId": "0012500001DNi0FAAT", "ChangeEventHeader": { "commitNumber": 10583584855437, "commitUser": "0054J000000g1dGQAQ", "sequenceNumber": 1, "entityName": "Case", "changeType": "UPDATE", "changedFields": ["AccountId", "LastModifiedDate"], "changeOrigin": "com/salesforce/api/soap/47.0;client=SfdcInternalAPI/", "transactionKey": "000c6c88-b097-f5fb-0005-65d83dc022e5", "commitTimestamp": 1569407548000, "recordIds": ["50025000009vJE9AAM"] } }, "event": { "replayId": 103773372 } }
    const changedFields: Array<string> = message.payload.ChangeEventHeader.changedFields
    console.log(message.payload.ChangeEventHeader.recordIds + '\n =================')
    changedFields.forEach(cf => console.log(`${cf}: ${message.payload[cf]}`))
 
  }
  async subscribeToChannel(channel: string) {
    const replayId = -2
    //@ts-ignore
    const replayExtension = new jsforce.StreamingExtension.Replay(channel, replayId)
    //@ts-ignore
    const authExtension = new jsforce.StreamingExtension.AuthFailure(() => process.exit(1))
    const conn = await this.login()
    //@ts-ignore
    const streamingClient = conn.streaming.createClient([replayExtension, authExtension])
    console.log('Starting subscription...')
    streamingClient.subscribe(channel, (data: any) => {
      this.streamPrettifier(data)
    })
  }
}