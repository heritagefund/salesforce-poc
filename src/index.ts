import Command from '@oclif/command'
import cli from 'cli-ux'
import { SalesforcePortalClient } from './SalesforcePortalClient'
import './lib/env'
import * as inquirer from 'inquirer'
import { FormType } from './buildPayload'
import uuid = require('uuid')



class PortalCli extends Command {
  async run() {
    const sfClient = new SalesforcePortalClient(process.env.SALESFORCE_CONSUMER_KEY!, process.env.SALESFORCE_CONSUMER_SECRET!, process.env.SALESFORCE_USERNAME!, process.env.SALESFORCE_PASSWORD!)

    this.log('hello world')
    this.log('welcome to the Portal 🏛')
    this.log('=========================')
    const promptNewOrExisting = await inquirer.prompt([{
      name: 'newOrExisting',
      type: 'list',
      choices: [{ name: 'new' }, { name: 'existing' }]
    }])
    const applicationId = await promptNewOrExisting.newOrExisting === 'existing' ? await cli.prompt('applicationId') : uuid()
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



    // await Promise.all([sfClient.getInstanceId(), sfClient.postApexRest(projectTitle, organisationName, formTypeEnum)]).then(p => this.log(`${p[0]}/${JSON.parse(p[1]).caseId}`))
    console.log(promptFormType.formType)
    await Promise.all([sfClient.getInstanceId(), sfClient.postApexRest(promptFormType.formType, applicationId, projectTitle, organisationName,)]).then(p => this.log(p[1]))
  }
}

export = PortalCli
