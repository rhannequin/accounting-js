var spent = require('./spent')
  , categoryExpenses = require('./categoryExpenses')

module.exports = function(months, label, category, reverse) {
  reverse = reverse || false
  months.forEach(function(month) {
    var monthlyExpenses = categoryExpenses(month.expenses, category, reverse)
    month[label] = spent(monthlyExpenses)
  })
  return months
}
