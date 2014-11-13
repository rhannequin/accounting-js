var moment = require('moment')

module.exports = function(expenses, debits) {
  var months = []

  // Define all months involved
  expenses.forEach(function(expense) {
    var expenseDate = expense.date
    var month = moment(expenseDate).date(1).hour(23).format()
    if(months.indexOf(month) === -1) {
      months.push(month)
    }
  })

  // For each debits, add it to each months
  // from the date written, to the date written
  debits.forEach(function(debit) {
    var date = new Date(debit.start_date)
      , startMoment = moment(date)

    do {
      expenses.push(addToExpenses(debit, startMoment.toDate()))
      startMoment.add(1, 'month')
    } while(containsDate(months, startMoment))
  })

  function containsDate(months, date) {
    var res = false
    months.forEach(function(month) {
      var m = moment(month).date(1).hour(23)
      date.date(1).hour(23)
      if(m.isSame(date)) {
        res = true
      }
    })
    return res
  }

  function addToExpenses(debit, date) {
    var add = {
          label: debit.label
        , means: debit.means
        , date: new Date(date)
        , value: debit.value
      }
      if(typeof debit.categories !== 'undefined') {
        add.categories = debit.categories
      }
      return add
  }

  return expenses
}
