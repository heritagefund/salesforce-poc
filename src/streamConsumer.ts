import { SalesforcePortalClient } from './SalesforcePortalClient'
import './lib/env'

const sfClient =  new SalesforcePortalClient(process.env.SALESFORCE_CONSUMER_KEY!, process.env.SALESFORCE_CONSUMER_SECRET!, process.env.SALESFORCE_USERNAME!, process.env.SALESFORCE_PASSWORD!)
sfClient.subscribeToChannel('/topic/CaseUpdates')
// sfClient.subscribeToChannel('/data/ChangeEvents')