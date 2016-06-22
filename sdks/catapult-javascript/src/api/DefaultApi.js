(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Account', '../model/ErrorModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Account'), require('../model/ErrorModel'));
  } else {
    // Browser globals (root is window)
    if (!root.BandwidthApi) {
      root.BandwidthApi = {};
    }
    root.BandwidthApi.DefaultApi = factory(root.BandwidthApi.ApiClient, root.BandwidthApi.Account, root.BandwidthApi.ErrorModel);
  }
}(this, function(ApiClient, Account, ErrorModel) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the usersUserIdAccountGet operation.
     * @callback module:api/DefaultApi~usersUserIdAccountGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId Id of the user you want account information for
     * @param {module:api/DefaultApi~usersUserIdAccountGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Account}
     */
    this.usersUserIdAccountGet = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling usersUserIdAccountGet";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Account;

      return this.apiClient.callApi(
        '/users/{userId}/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
