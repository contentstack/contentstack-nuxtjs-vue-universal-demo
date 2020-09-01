/* eslint-disable prefer-promise-reject-errors */
const contentstack = require("contentstack");

export default {
  getEntry(contentTypeUid) {
    const data = new Promise((resolve, reject) => {
      if (
        process.env.api_key &&
        process.env.delivery_token &&
        process.env.environment
      ) {
        // initializing contentstck sdk
        const Stack = contentstack.Stack({
          api_key: process.env.api_key,
          access_token: process.env.delivery_token,
          environment: process.env.environment,
        });
        // Query
        Stack.ContentType(contentTypeUid)
          .Query()
          .includeReference(["header", "footer"])
          .toJSON()
          .find()
          .then(
            function success(result) {
              if (result) {
                resolve(result[0]);
              } else {
                return reject("Internal Error");
              }
            },
            function error(error) {
              return reject(error);
            }
          );
      } else {
        return reject("Please provide valid config parameters");
      }
    });
    return data;
  },
};
