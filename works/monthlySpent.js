var spent = require('./spent')
  , categoryExpenses = require('./categoryExpenses')

module.exports = function(months) {
  months.forEach(function(month) {
    var monthlyExpenses = cExpenses(month.expenses, 'ignore', true)
    month.spent = spent(monthlyExpenses)
  })
  return months
}
