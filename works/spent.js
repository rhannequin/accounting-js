module.exports = function(expenses) {
  var spent = 0;
  expenses.forEach(function(expense) {
    spent += expense.value
  })
  return spent
}
