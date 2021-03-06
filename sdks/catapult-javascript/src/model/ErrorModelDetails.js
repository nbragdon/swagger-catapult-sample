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
    root.BandwidthApi.ErrorModelDetails = factory(root.BandwidthApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ErrorModelDetails model module.
   * @module model/ErrorModelDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ErrorModelDetails</code>.
   * @alias module:model/ErrorModelDetails
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ErrorModelDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorModelDetails} obj Optional instance to populate.
   * @return {module:model/ErrorModelDetails} The populated <code>ErrorModelDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));
