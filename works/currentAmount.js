module.exports = function(expenses, config) {
  var startAmount = config.startAmount
  expenses.forEach(function(expense) {
    startAmount += expense.value
  })
  return startAmount
}
