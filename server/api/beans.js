const { getApiResponse } = require("../utils/requests");

exports.handler = async (event, context) => {
    return getApiResponse({
        body: {
            text: 'hello good coupe is on the way!!'
        }
    })


};
