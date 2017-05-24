import config from '~/config'
var axios = require('axios')

export default {
    getEntry(){
    const data = new Promise((resolve, reject) => {
            if(config.contentstack.api_key && config.contentstack.access_token && config.contentstack.environment){
                var url="https://cdn.contentstack.io/v3/content_types/home/entries?api_key="+config.contentstack.api_key+"&access_token="+config.contentstack.access_token+"&environment="+config.contentstack.environment+"&include[]=header&include[]=footer";
                axios.get(url,{
                }).then(function (res) {
                    if(res.data.entries[0])
                        resolve(res.data.entries[0])
                    else
                        return reject("Internal Error")
                })
                 .catch(function (error) {
                        return reject(error)
                 });
            }else{
                return reject("Please provide valid config parameters")
             }

    })
    return data
   }
}
