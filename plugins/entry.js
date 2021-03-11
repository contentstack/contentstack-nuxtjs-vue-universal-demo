/* eslint-disable prefer-promise-reject-errors */
const contentstack = require("contentstack");
const Stack = contentstack.Stack(
  process.env.api_key,
  process.env.delivery_token,
  process.env.environment,
  process.env.region ? process.env.region : "us"
);

if (process.env.custom_host) {
  Stack.setHost(process.env.custom_host);
}

export default {
  getEntry(contentTypeUid) {
    const data = new Promise((resolve, reject) => {
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
    });
    return data;
  },
};
