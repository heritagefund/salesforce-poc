import Command from '@oclif/command'
import cli from 'cli-ux'
import { SalesforcePortalClient } from './SalesforcePortalClient'
import './lib/env'


class PortalCli extends Command {
  async run() {
const sfClient =  new SalesforcePortalClient(process.env.SALESFORCE_CONSUMER_KEY!, process.env.SALESFORCE_CONSUMER_SECRET!, process.env.SALESFORCE_USERNAME!, process.env.SALESFORCE_PASSWORD!)
  
   this.log('hello world')
    this.log('welcome to the Portal 🏛')
    this.log('=========================')
    const projectTitle: string = await cli.prompt('Project title')
    const organisationName: string = await cli.prompt('Organisation name')
    await Promise.all([sfClient.getInstanceId(),sfClient.postApexRest(projectTitle, organisationName)]).then(p => this.log(`${p[0]}/${JSON.parse(p[1]).caseId}`))
  }
}

export = PortalCli
