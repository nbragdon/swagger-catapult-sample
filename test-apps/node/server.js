var BandwidthApi = require('../../sdks/catapult-javascript/src');
var config = require('config.json');

var defaultClient = BandwidthApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = config.username;
basicAuth.password = config.password;

var api = new BandwidthApi.DefaultApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersUserIdAccountGet(config.userId, callback);
