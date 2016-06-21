'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.usersUserIdAccountGET = function usersUserIdAccountGET (req, res, next) {
  Default.usersUserIdAccountGET(req.swagger.params, res, next);
};
