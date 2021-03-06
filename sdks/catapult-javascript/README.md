# bandwidth-api

BandwidthApi - JavaScript client for bandwidth-api
The bandwidth application platform specification
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2016-06-22T09:58:44.127-04:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://catapult.inetwork.com/pages/contact.jsf](https://catapult.inetwork.com/pages/contact.jsf)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install bandwidth-api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/YOUR_GIT_REPO_ID
then install it via:

```shell
npm install YOUR_USERNAME/YOUR_GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BandwidthApi = require('bandwidth-api');

var defaultClient = BandwidthApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BandwidthApi.DefaultApi()

var userId = "userId_example"; // {String} Id of the user you want account information for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersUserIdAccountGet(userId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.catapult.inetwork.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BandwidthApi.DefaultApi* | [**usersUserIdAccountGet**](docs/DefaultApi.md#usersUserIdAccountGet) | **GET** /users/{userId}/account | 


## Documentation for Models

 - [BandwidthApi.Account](docs/Account.md)
 - [BandwidthApi.ErrorModel](docs/ErrorModel.md)
 - [BandwidthApi.ErrorModelDetails](docs/ErrorModelDetails.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication

