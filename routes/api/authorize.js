const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

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

    console.log(`PARAMETERS IN AUTHORIZE ROUTE: amazon_callback_uri: ${amazon_callback_uri}, amazon_state: ${amazon_state}, selling_partner_id: ${selling_partner_id}`)

    res.json({ amazon_callback_uri, amazon_state, selling_partner_id });
})

module.exports = router;