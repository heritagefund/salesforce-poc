import jsforce = require('jsforce');
import uuid = require('uuid/v1')
import util = require('util');
import redis = require('redis')
import { promisify } from 'util'
import {buildPayload, FormType} from './buildPayload'


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

  async postApexRest(projectTitle: string, organisationName: string, formType: string): Promise<any> {
    return await this.login().then(l => l.apex.post('/loadData/', buildPayload(organisationName, projectTitle, formType)))
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
    const replayId: number =  -1 //get since last stored, or start with new events
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
      console.log(util.inspect(data))
      SalesforcePortalClient.streamPrettifier(data)
    })
  }
}