import * as APIUtil from '../util/auth_util';

export const RECEIVE_AMAZON_AUTH = 'RECEIVE_AMAZON_AUTH';

export const receiveAmazonCallback = payload => {
    return {
        type: RECEIVE_AMAZON_AUTH,
        payload
    }
}

export const fetchAmazonCallback = () => dispatch => {
    return APIUtil.fetchAmazonCallback().then(payload => {
        console.log(JSON.stringify(payload));
        dispatch(receiveAmazonCallback(payload));
        return payload.data;
    })
}