var spent = require('./spent')

module.exports = function(expenses, config) {
  var startAmount = config.startAmount
  return startAmount + spent(expenses)
}
