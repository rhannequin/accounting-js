module.exports = function(expenses, category, inverse) {
  var result = []
  inverse = inverse || false

  expenses.forEach(function(expense) {
    var categories = expense.categories
      , push =  (
                  inverse &&
                  typeof categories !== 'undefined' &&
                  categories.indexOf(category) === -1
                ) ||
                (
                  inverse &&
                  typeof categories === 'undefined'
                ) ||
                (
                  !inverse &&
                  typeof categories !== 'undefined' &&
                  categories.indexOf(category) > 1
                )
    if(push) {
      result.push(expense)
    }
  })


  return result
}
