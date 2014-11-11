module.exports = function(expenses, debits) {
  var months = []
  expenses.forEach(function(expense) {
    var expenseDate = expense.date
    var month = new Date(expenseDate.getFullYear(), expenseDate.getMonth(), 1)
    if(months.indexOf(month.getTime()) === -1) {
      months.push(month.getTime())
    }
  })
  months = months.map(function(month) {
    var d = new Date()
    d.setTime(month)
    return d
  })
  debits.forEach(function(debit) {
    var date = new Date(debit.start_date)
  })
  return expenses
}
