import jsforce = require('jsforce');
import uuid = require('uuid/v1')
import redis = require('redis')
import { promisify } from 'util'

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

  buildPayload = (organisationName: string, projectName: string) => {
    return {
      "meta": {
        "form": "3-10k-grant",
        "schemaVersion": "v1.x",
        "environment": "production",
        "commitId": "b4ecf18eae01d34b296e9388f387cc42bf7c0f93",
        "locale": "en",
        "username": "example@example.com",
        "applicationId": "a9bffed0-e131-11e9-880f-31a49a4bf599",
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
        "projecDifference": "More free text",
        "projectCommunity": "Even more free text",
        "projectOrgBestPlace": "Even more and more free text",
        "projectOutcome1": "More and more and more free text",
        "projectOutcome2": "More and more and more free text",
        "projectOutcome3": "More and more and more free text",
        "projectOutcome4": "More and more and more free text",
        "projectOutcome5": "More and more and more free text",
        "projectOutcome6": "More and more and more free text",
        "projectOutcome7": "More and more and more free text",
        "projectOutcome8": "More and more and more free text",
        "projectOutcome9": null,
        "projectTotalCosts": 20000,
        "organisationId": "c23e12e0-e69e-11e9-aaf2-2514879727cc",
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
        "mainContactEmail": "Lizzie90@example.com",
        "mainContactPhone": "0345 4 10 20 30",
        "authorisedSignatoryRole": "trustee",
        "authorisedSignatoryName": "Jane Doe",
        "authorisedSignatoryPhone": "07777 777777",
        "authorisedSignatoryEmail": "jane@example.com"
    }
  }
}

  private static streamPrettifier(message: any) {
    //const example = { "schema": "idzQ0I-adgCfqNzILegnJg", "payload": { "LastModifiedDate": "2019-09-25T10:32:28Z", "AccountId": "0012500001DNi0FAAT", "ChangeEventHeader": { "commitNumber": 10583584855437, "commitUser": "0054J000000g1dGQAQ", "sequenceNumber": 1, "entityName": "Case", "changeType": "UPDATE", "changedFields": ["AccountId", "LastModifiedDate"], "changeOrigin": "com/salesforce/api/soap/47.0;client=SfdcInternalAPI/", "transactionKey": "000c6c88-b097-f5fb-0005-65d83dc022e5", "commitTimestamp": 1569407548000, "recordIds": ["50025000009vJE9AAM"] } }, "event": { "replayId": 103773372 } }
    // const changedFields: Array<string> = message.payload.ChangeEventHeader.changedFields
    // console.log(message.payload.ChangeEventHeader.recordIds + '\n =================')
    // changedFields.forEach(cf => console.log(`${cf}: ${message.payload[cf]}`))
    // console.log(message)
    console.log(`📰 ${message.sobject.ApplicationId__c || message.sobject.Id} status has changed to: ${message.sobject.Status}`)
  }

  async subscribeToChannel(channel: string) {
    const redisClient: redis.RedisClient = redis.createClient()
    const getAsync = promisify(redisClient.get).bind(redisClient);
    const setAsync = promisify(redisClient.set).bind(redisClient);
    const redisPromise: Promise<string> = getAsync(channel)
    const replayId: number = parseInt(await redisPromise) || -1 //get since last stored, or start with new events
    //@ts-ignore
    const replayExtension = new jsforce.StreamingExtension.Replay(channel, replayId)
    //@ts-ignore
    const authExtension = new jsforce.StreamingExtension.AuthFailure(() => process.exit(1))
    const conn = await this.login()
    //@ts-ignore
    const streamingClient = conn.streaming.createClient([replayExtension, authExtension])
    console.log(`Replay ID is ${replayId}`)
    console.log('Starting subscription...')
  

    streamingClient.subscribe(channel, async function (data: any) {
      await setAsync(channel, data.event.replayId)
      SalesforcePortalClient.streamPrettifier(data)
    })
  }
}