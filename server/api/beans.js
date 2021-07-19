import {
    getApiResponse,
    getRequestParams,
    isGETRequest,
    isPOSTRequest,
    statusCodes,
    StrapiAPI
} from '../utils/requests'


const GETHandler = async (event, context) => {
    // how to get params
   //const params = getRequestParams(event);
    //params.country
    
    let strapiApiRoute = '/beans'
    
    // if someone called /beans?beanId=44 (and wanted only one)
    const beanId = event.queryStringParameters.beanId
    if (beanId) strapiApiRoute = `/beans/${beanId}`
    const beanCountry = event.queryStringParameters.country.toLowerCase()
    if (beanCountry) strapiApiRoute = `/beans?country_contains=${beanCountry}`

    // Get beans or bean
    const {
        data: beans
    } = await StrapiAPI.get(strapiApiRoute)

    return getApiResponse({
        body: {
            beans,
        }
    })
}

const POSTHandler = (event, context) => {
        // how to get params
        console.log("coucou")
    const params = getRequestParams(event);
    return getApiResponse({
        statusCode: statusCodes.OK,
        body: {
            coffee: 'oui'
        }
    })

    // https://strapi.io/documentation/3.0.0-beta.x/content-api/parameters.html#filters
    // params.country 
    // /beans?country_contains=m
    // /beans?country=mexico
    
}

exports.handler = async (event, context) => {
    // Handle bad request first
    if (isGETRequest(event)) return GETHandler(event, context)
    else if (isPOSTRequest(event)) return POSTHandler(event, context)

    return getApiResponse({
        statusCode: statusCodes["Bad Request"]
    })
};