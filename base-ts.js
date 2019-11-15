const merge = require('lodash.merge');

module.exports = merge({},
  require('./rules/ts/base'),
  require('./rules/common'));
