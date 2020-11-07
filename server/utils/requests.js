export const getApiResponse = ({ statusCode = 200, body: _body = {} }) => {
    const isJSONBody = typeof _body === "object";
    // Handle body
    const body = isJSONBody ? JSON.stringify(_body) : _body

    // Handle headers
    let headers = {}
    if (isJSONBody) headers = {...headers, "content-type": "application/json"}

    return {
        statusCode,
        headers,
        body
    }
}