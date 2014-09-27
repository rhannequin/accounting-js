var utils = require('../utils')

module.exports = function(expenses) {
  var tmp1 = []
  expenses.forEach(function(expense) {
    var expenseDate = expense.date
      , expenseYear = expenseDate.getFullYear()
      , expenseMonth = expenseDate.getMonth()
      , add = true
    tmp1.forEach(function(t) {
      if(t.year === expenseYear && t.month === expenseMonth) {
        add = false
      }
    })
    if(add) {
      tmp1.push({
          date: new Date(expenseYear, expenseMonth, 1)
        , year: expenseYear
        , month: expenseMonth
        , expenses: []
      })
    }
    tmp1.forEach(function(t) {
      if(t.year === expenseYear && t.month === expenseMonth) {
        t.expenses.push(expense)
      }
    })
  })

  tmp1 = utils.sortByDate(tmp1)
  tmp1.forEach(function(t) {
    t.expenses = utils.sortByDate(t.expenses)
  })

  return tmp1
}
