import { getApiResponse, getRequestParams } from '../utils/requests'

exports.handler = async (event, context) => {
    const params = getRequestParams(event)
    return getApiResponse({
        body: {
            text: 'hello world',
            ...params
        }
    })
};