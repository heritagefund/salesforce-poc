const nforce = require('nforce')
import './lib/env'
async function run()  {
    const org = nforce.createConnection({
        clientId: process.env.SALESFORCE_CONSUMER_KEY,
        clientSecret: process.env.SALESFORCE_CONSUMER_SECRET,
        redirectUri: 'http://localhost:3000/oauth/_callback',
        environment: 'sandbox'
    })

    return await org.authenticate({
        username: process.env.SALESFORCE_USERNAME, 
        password: process.env.SALESFORCE_PASSWORD
    })
};
run().catch(e => {console.log(`error authenticating ${e}`)}).then(oauth => (console.log(oauth)))



