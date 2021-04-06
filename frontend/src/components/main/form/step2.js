import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAmazonCallback } from '../../../actions/auth_actions';
import { useHistory } from 'react-router-dom';

function Step2({ currentStep, next, prev, fetchAmazonCallback }) {
    const history = useHistory();
    // useEffect(() => {
    //     console.log('Fetching Amazon callback, hang tight...');
    //     // setTimeout(fetchAmazonCallback, 2000);
    //     fetchAmazonCallback().then((data) => redirect(data));
    // }, []);

    // https://amazon.com/apps/authorize/confirm/amzn1.sellerapps.app.2eca283f-9f5a-4d13-b16c-474EXAMPLE57?redirect_uri=https://d2yzyfnnpjylxu.cloudfront.net/landing.html&amazon_state=amazonstateexample&state=-37131022&version=beta

    function handleAuthTwo() {
        console.log('Fetching Amazon callback, hang tight...');
        fetchAmazonCallback().then((data) => redirect(data));
    }

    function redirect(data) {
        console.log('Redirecting...');
        const amazonCallback = data.amazon_callback_uri;
        const amazonState = data.amazon_state;
        const redirectURI = 'https://imperialflippers.com/api/authorize';
        const url = `${amazonCallback}?redirect_uri=${redirectURI}&amazon_state=${amazonState}&state=37131022&version=beta`;
        console.log(url);
        // history.push(url);
        window.location.href = url;
    }

    // useEffect(() => {
    //     console.log('Redirecting...');
    //     const redirectURI = 'https://imperialflippers.com/api/authorize';
    //     const state = Math.floor(Math.random() * 100000000);
    //     const url = `${amazonCallback}?redirect_uri=${redirectURI}&amazon_state=${amazonState}&state=37131022&version=beta`;
    //     console.log(url);
    // }, [amazonCallback]);

    if (currentStep !== 2) return null;
    return (
        <div className="step-wrapper">
            <div className="step-header">Step 2</div>
            <button className="authorize-btn" onClick={() => handleAuthTwo()}>Complete Authorization</button>
            <div className="step-ctrls">
                <button className="step-btn" onClick={() => prev()}>Previous</button>
                <button className="step-btn" onClick={() => next()}>Next</button>
            </div>
        </div>
    )
}

// const mapStateToProps = (state, _ownProps) => {
//     let amazonCallback = null;
//     let amazonState = null;
//     if (state.auth && state.auth.data) amazonCallback = state.auth.data.amazon_callback_uri;
//     if (state.auth && state.auth.data) amazonState = state.auth.data.amazonState;
//     return {
//         amazonCallback,
//         amazonState
//     }
// }

const mapDispatchToProps = (dispatch) => ({
    fetchAmazonCallback: () => dispatch(fetchAmazonCallback())
});

export default connect(null, mapDispatchToProps)(Step2);
