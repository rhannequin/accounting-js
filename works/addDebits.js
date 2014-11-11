module.exports = function(expenses, debits) {
  var months = []

  expenses.forEach(function(expense) {
    var expenseDate = expense.date
    var month = new Date(expenseDate.getFullYear(), expenseDate.getMonth(), 1)
    if(months.indexOf(month.getTime()) === -1) {
      months.push(month.getTime())
    }
  })

  debits.forEach(function(debit) {
    var date = new Date(debit.start_date)
      , statTime = new Date(date.getFullYear(), date.getMonth(), 1).getTime()
      , addToExpenses
    if(months.indexOf(statTime) > -1) {
      addToExpenses = {
          label: debit.label
        , means: debit.means
        , date: date
        , value: debit.value
      }
      if(typeof debit.categories !== 'undefined') {
        addToExpenses.categories = debit.categories
      }
      expenses.push(addToExpenses)
    }
  })

  return expenses
}
