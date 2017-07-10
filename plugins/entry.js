import config from '~/config'
var contentstack = require('contentstack')

export default {
    getEntry(){
    const data = new Promise((resolve, reject) => {
            if(config.contentstack.api_key && config.contentstack.access_token && config.contentstack.environment){
                //initializing contentstck sdk
                var Stack= contentstack.Stack({
                    api_key: config.contentstack.api_key,
                    access_token:config.contentstack.access_token,
                    environment: config.contentstack.environment
                });
                //Query
                var  Query = Stack.ContentType("home").Query()
                    .includeReference('header','footer')
                    .toJSON()
                    .find()
                    .then(function success(result) {
                        if(result){
                            resolve(result[0][0])
                        }else{
                            return reject("Internal Error")
                        }
                    }, function error(error) {
                        return reject("Internal Error")
                    });
            }else{
                return reject("Please provide valid config parameters")
             }

    })
    return data
   }
}
