var moment = require('moment')

module.exports = function(expenses, debits) {
  var months = []

  expenses.forEach(function(expense) {
    var expenseDate = expense.date
    var month = moment(expenseDate).format()
    if(months.indexOf(month) === -1) {
      months.push(month)
    }
  })

  debits.forEach(function(debit) {
    var date = new Date(debit.start_date)
      , statTime = new moment(date).format()
      , addToExpenses

    if(months.indexOf(statTime) !== -1) {
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
