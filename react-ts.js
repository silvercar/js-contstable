const merge = require('lodash.merge');

module.exports = merge({},
  require('./base-ts'),
  require('./rules/react'));
