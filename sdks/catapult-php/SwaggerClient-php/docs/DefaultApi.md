# Swagger\Client\DefaultApi

All URIs are relative to *https://api.catapult.inetwork.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUserIdAccountGet**](DefaultApi.md#usersUserIdAccountGet) | **GET** /users/{userId}/account | 


# **usersUserIdAccountGet**
> \Swagger\Client\Model\Account usersUserIdAccountGet($user_id)



### Example 
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi();
$user_id = "user_id_example"; // string | Id of the user you want account information for

try { 
    $result = $api_instance->usersUserIdAccountGet($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->usersUserIdAccountGet: ', $e->getMessage(), "\n";
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **string**| Id of the user you want account information for | 

### Return type

[**\Swagger\Client\Model\Account**](Account.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

