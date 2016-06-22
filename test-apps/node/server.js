var BandwidthApi = require('../../sdks/catapult-javascript/src');
var config = require('./config.json');

var api = new BandwidthApi.DefaultApi();

// Configure HTTP basic authorization: basicAuth
var basicAuth = api.apiClient.authentications['basicAuth'];
basicAuth.username = config.username;
basicAuth.password = config.password;


console.log('api', api);

var userId = "userId_example"; // {String} Id of the user you want account information for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
};
api.usersUserIdAccountGet(config.userId, callback);
