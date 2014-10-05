module.exports = function(months) {
  months.forEach(function(month) {
    var spent = 0
    month.expenses.forEach(function(expense) {
      var categories = expense.categories
      if(typeof categories !== 'undefined' && categories.indexOf('ignore') > -1) {
        return
      }
      spent += expense.value
    })
    month.spent = spent
  })
  return months
}
