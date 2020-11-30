import Axios from "axios";

export const getApiResponse = ({ statusCode = 200, body: _body = {} }) => {
    const isJSONBody = typeof _body === "object";
    // Handle body
    const body = isJSONBody ? JSON.stringify(_body) : _body

    // Handle headers
    let headers = {
        "Access-Control-Allow-Headers": "*"
    }
    headers = {...headers, "Access-Control-Allow-Origin": "*"}
    if (isJSONBody) headers = { ...headers, "content-type": "application/json" }

    return {
        statusCode,
        headers,
        body
    }
}
const isJSONBody = (body) => body[0] === "{"
export const getRequestParams = (event) => {
    let params = {}
    if (event.body && isJSONBody(event.body)) {
        params = { ...params, ...JSON.parse(event.body)}
    } if (event.queryStringParameters) {
        params = { ...params, ...event.queryStringParameters}
    }
    return params
}

export const isPOSTRequest = (event) => event.httpMethod === "POST"
export const isGETRequest = (event) => event.httpMethod === "GET"
export const isPUTRequest = (event) => event.httpMethod === "PUT"

export const StrapiAPI = Axios.create({
  baseURL: `https://super-server-k.herokuapp.com`,
  timeout: 10000,
});


export const statusCodes = {
    "OK": 200,
    "Bad Request": 400,
    "Not found": 404
}