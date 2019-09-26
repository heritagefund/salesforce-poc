Salesforce integration proof-of-concept
==========
## Running locally
### POSTing data
`./bin/run`
### Reading event stream
#### Setup
`brew install redis`
Start Redis in a separate tab:
`redis-server`
`npm install -g ts-node`
`ts-node ./src/streamConsumer.ts`


