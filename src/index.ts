import Command from '@oclif/command'
import cli from 'cli-ux'
import { SalesforcePortalClient } from './SalesforcePortalClient'
import './lib/env'
import * as inquirer from 'inquirer'
import uuid = require('uuid')


class PortalCli extends Command {
  async run() {

    const sfClient = new SalesforcePortalClient(
      process.env.SALESFORCE_CONSUMER_KEY!, 
      process.env.SALESFORCE_CONSUMER_SECRET!, 
      process.env.SALESFORCE_USERNAME!, 
      process.env.SALESFORCE_PASSWORD!
    )

    this.log('National Lottery Heritage Fund')
    this.log('Test Client for Salesforce Integration')
    this.log('--------------------------------------')

    const promptSubmissionType = await inquirer.prompt([{
      name: 'submissionType',
      type: 'list',
      choices: [{ name: 'new' }, { name: 'existing' }]
    }])

    const applicationId = await promptSubmissionType.submissionType === 'existing' ? await cli.prompt('applicationId') : uuid()

    const promptFormType = await inquirer.prompt([{
      name: 'formType',
      type: 'list',
      choices: [{ name: '3-10k-grant' }, { name: 'permission-to-start' }, {name: 'completion-report'}]
    }])

    let projectTitle
    let organisationName

    if (promptFormType.formType === '3-10k-grant') {
      projectTitle = await cli.prompt('Project title')
      organisationName = await cli.prompt('Organisation name')
    }

    await Promise.all(
      [
        sfClient.getInstanceId(), 
        sfClient.postApexRest(
          promptFormType.formType, 
          applicationId, 
          projectTitle, 
          organisationName,
          )
      ]
    ).then(
      // Log out the payload which is being sent via a HTTP POST request to Salesforce
      p => this.log(p[1])
    )

  }
}

export = PortalCli
