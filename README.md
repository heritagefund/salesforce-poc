# Test Client for Salesforce Integration

This application is a small, lightweight test client for testing payload integration with Salesforce. This allows us to test the various payloads which are sent from the 
[funding-frontend](https://github.com/heritagefund/funding-frontend) application without the need for manually completing funding applications.

## Running the application

### Prerequisites

Populate the `.env.sample` file and rename to `.env`. Values for environment variables can be found either in the team's shared 1Password vault, or within the 
Software Engineering section of the Digital Service Design Team site on Microsoft SharePoint.

Run `yarn install` to install dependencies.

### How to run

In a terminal window in the application directory, run the following command:

```bash
./bin/run
```

This will provide you with a list of options:

```bash
? submissionType (Use arrow keys)
> new
  existing
```

The `new` option will allow you to submit a new payload to Salesforce. Currently, this can be one of three payload types - a new £3-10k funding application, 
a *Permission to Start* form, or a *Completion Report* form.

Selecting the `new` option will list the following in your terminal:

```bash
? submissionType: new
? formType: (Use arrow keys)
> 3-10k-grant
  permission-to-start
  completion-report
```

#### Submitting a new £3-10k funding application

Selecting the `3-10k-grant` option will result in the following being displayed in your terminal:

```bash
? submissionType: new
? formType: 3-10k-grant
Project title: 
```

Enter a project title and press the `Return` key.

```bash
? submissionType: new
? formType: 3-10k-grant
Project title: <Your project title>
Organisation name: 
```

Enter an organisation name and press the `Return` key.

The payload being sent to Salesforce will be logged to the console. You'll also see a log like the one below detailing the response from Salesforce.

```bash
{"statusCode":"200","status":"Success","projectRefNumber":"NS-00-00000","ProjectCostRefID":null,"Costs":null,"Costheading":null,"caseNumber":"00000000","caseId":"5000000000C1GuxAAA","accountId":"0000000000TestAAAA"}
```

#### Submitting a new Permission to Start form

Selecting the `permission-to-start` option will result in a Permission to Start form payload being sent to Salesforce.

The response from Salesforce will be logged to the console.

#### Submitting a new Completion Report form

Selecting the `completion-report` option will result in a Completion Report form payload being sent to Salesforce.

The response from Salesforce will be logged to the console.

#### Reading the Salesforce event stream

If you haven't already, populate the `.env.sample` file and rename to `.env`. Values for environment variables can be found either in the team's shared 1Password vault, 
or within the Software Engineering section of the Digital Service Design Team site on Microsoft SharePoint.

If you haven't already, run `yarn install` to install dependencies.

Run `brew install redis` to install Redis locally.

In a terminal window run `redis-server` to start a local Redis server.

In a separate terminal window or tab, run the following command to begin reading from the Salesforce event stream:

```bash
npm run stream
```
