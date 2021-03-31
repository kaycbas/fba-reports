const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require('axios');

// const validateProject = require('../../validation/projects');

// OAuth route for Amazon authorization
//
// Instructions: https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#oauth-authorization-uris
// Amazon loads your Login URI (which you provided at application registration) into the browser, adding the following query parameters:
// amazon_callback_uri, amazon_state, selling_partner_id
//
// Example req
// localhost:5000/api/authorize?amazon_callback_uri=https://amazon.com/apps/authorize/confirm/amzn1.sellerapps.app.2eca283f-9f5a-4d13-b16c-474EXAMPLE57&amazon_state=amazonstateexample&selling_partner_id=A3FHEXAMPLEYWS
// https://imperialflippers.com/api/authorize?amazon_callback_uri=https://amazon.com/apps/authorize/confirm/amzn1.sellerapps.app.2eca283f-9f5a-4d13-b16c-474EXAMPLE57&amazon_state=amazonstateexample&selling_partner_id=A3FHEXAMPLEYWS
router.get('/', (req, res) => {
    let amazon_callback_uri = req.query.amazon_callback_uri;
    let amazon_state = req.query.amazon_state;
    let selling_partner_id = req.query.selling_partner_id;

    console.log('----$$$ AUTHORIZE ROUTE $$$----:');
    console.log(`Full reuqest: ${req.query}`);
    console.log(`Full reuqest stringified: ${JSON.stringify(req.query)}`);
    console.log(`Request keys: ${Object.keys(req.query)}`);
    console.log(`Request values: ${Object.values(req.query)}`);
    console.log('----$$$$$$$$$$----');

    fetchRefreshToken(req.query);

    // console.log(`PARAMETERS IN AUTHORIZE ROUTE: amazon_callback_uri: ${amazon_callback_uri}, amazon_state: ${amazon_state}, selling_partner_id: ${selling_partner_id}`)

    res.json({ amazon_callback_uri, amazon_state, selling_partner_id });
})

function fetchRefreshToken(data) {
    console.log(`post to amazon route: ${JSON.stringify(data)}`)
    const payload = {
        'grant_type': 'authorization_code',
        'code': `${data.spapi_oauth_code}`,
        'redirect_uri': 'https://imperialflippers.com/api/authorize/lwa',
        'client_id': 'client_id',
        'client_secret': 'client_secret'
    };
    axios.post('https://api.amazon.com/auth/o2/token', payload);
}

router.get('/lwa', (req, res) => {
    console.log('#### RECEIVED REQUEST IN LWS ROUTE!! ####');
    console.log(`LWA req: ${JSON.stringify(req)}`);
});

/*
{"amazon_callback_uri":"[https://sellercentral.amazon.com/apps/authorize/confirm/amzn1.sp.solution.a6ce15fc-0aa6-477a-b7bd-51ea48583bb0",
"amazon_state":"MTYxNjU0NDcxNDk2Ne-_vVzvv71yL--_ve-_vdaIcGTvv73vv71bDhBI77-9Z1lNeQop77-9Bu-_ve-_ve-_ve-_vSbvv73vv70v77-9VcWG77-977-93onvv73vv73vv73vv71XJe-_ve-_vTDvv70p77-9WDBRDhnvv73MgO-_vTY=",
"selling_partner_id":"AXC1J5HD8VVLB](https://sellercentral.amazon.com/apps/authorize/confirm/amzn1.sp.solution.a6ce15fc-0aa6-477a-b7bd-51ea48583bb0%22,%22amazon_state%22:%22MTYxNjU0NDcxNDk2Ne-_vVzvv71yL--_ve-_vdaIcGTvv73vv71bDhBI77-9Z1lNeQop77-9Bu-_ve-_ve-_ve-_vSbvv73vv70v77-9VcWG77-977-93onvv73vv73vv73vv71XJe-_ve-_vTDvv70p77-9WDBRDhnvv73MgO-_vTY=%22,%22selling_partner_id%22:%22AXC1J5HD8VVLB)"}
*/

module.exports = router;