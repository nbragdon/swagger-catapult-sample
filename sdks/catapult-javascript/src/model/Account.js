(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BandwidthApi) {
      root.BandwidthApi = {};
    }
    root.BandwidthApi.Account = factory(root.BandwidthApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Account model module.
   * @module model/Account
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
      }
      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
    }
    return obj;
  }


  /**
   * The current amount money you have to spend, in US dollars
   * @member {String} balance
   */
  exports.prototype['balance'] = undefined;

  /**
   * How payments for your account are done
   * @member {module:model/Account.AccountTypeEnum} accountType
   */
  exports.prototype['accountType'] = undefined;


  /**
   * Allowed values for the <code>accountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountTypeEnum = { 
    /**
     * value: Pre-paid
     * @const
     */
    PRE_PAID: "Pre-paid",
    
    /**
     * value: Post-paid
     * @const
     */
    POST_PAID: "Post-paid"
  };

  return exports;
}));
