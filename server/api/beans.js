import {
    getApiResponse,
    getRequestParams,
    isGETRequest,
    statusCodes,
    StrapiAPI
} from '../utils/requests'

exports.handler = async (event, context) => {
    // Handle bad request first
    if (!isGETRequest(event)) return getApiResponse({
        statusCode: statusCodes["Bad Request"]
    })

    let strapiApiRoute = '/beans'
    
    // if someone called /beans?beanId=44 (and wanted only one)
    const beanId = event.queryStringParameters.beanId
    if (beanId) strapiApiRoute = `/beans/${beanId}`
    
    // Get beans or bean
    const {
        data: beans
    } = await StrapiAPI.get(strapiApiRoute)

    return getApiResponse({
        body: {
            beans,
        }
    })
};