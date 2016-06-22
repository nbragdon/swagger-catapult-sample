var BandwidthApi = require('../../sdks/catapult-javascript/src');

var api = new BandwidthApi.DefaultApi()

var userId = "u-jbobr3ft53e34qrhotkunia"; // {String} Id of the user you want account information for
var apiToken = "t-g7byoakaidhk6eqk55hs4oq";
var apiSecret = "lwiaugrckjp4yklpcopuv3oll467tbb6nr2g6di";

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = apiToken;
basicAuth.password = apiSecret;


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersUserIdAccountGet(userId, callback);
