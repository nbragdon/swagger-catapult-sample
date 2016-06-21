(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ErrorModelDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorModelDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.BandwidthApi) {
      root.BandwidthApi = {};
    }
    root.BandwidthApi.ErrorModel = factory(root.BandwidthApi.ApiClient, root.BandwidthApi.ErrorModelDetails);
  }
}(this, function(ApiClient, ErrorModelDetails) {
  'use strict';

  /**
   * The ErrorModel model module.
   * @module model/ErrorModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ErrorModel</code>.
   * @alias module:model/ErrorModel
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorModel} obj Optional instance to populate.
   * @return {module:model/ErrorModel} The populated <code>ErrorModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [ErrorModelDetails]);
      }
    }
    return obj;
  }


  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;

  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * @member {Array.<module:model/ErrorModelDetails>} details
   */
  exports.prototype['details'] = undefined;




  return exports;
}));
