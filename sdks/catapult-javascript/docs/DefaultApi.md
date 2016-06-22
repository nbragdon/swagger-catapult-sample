# BandwidthApi.DefaultApi

All URIs are relative to *https://api.catapult.inetwork.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUserIdAccountGet**](DefaultApi.md#usersUserIdAccountGet) | **GET** /users/{userId}/account | 


<a name="usersUserIdAccountGet"></a>
# **usersUserIdAccountGet**
> Account usersUserIdAccountGet(userId)



### Example
```javascript
var BandwidthApi = require('bandwidth-api');
var defaultClient = BandwidthApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new BandwidthApi.DefaultApi()

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Id of the user you want account information for | 

### Return type

[**Account**](Account.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

