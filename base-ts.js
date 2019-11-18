const merge = require('lodash.merge');

module.exports = merge({},
  require('./rules/typescript'),
  require('./rules/common'));
