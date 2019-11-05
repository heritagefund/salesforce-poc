Salesforce integration proof-of-concept
==========
## Running locally
### Prerequisites
populate `.env.sample` and rename to `.env`

`yarn install`

### POSTing data
`./bin/run`
### Reading event stream
`brew install redis`

Start Redis in a separate tab:
`redis-server`

`yarn install`

`npm run stream`