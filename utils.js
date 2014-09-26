var transforms = {
  date: function(value) {
    return new Date(value)
  }
}

module.exports = {

  convert: function(json) {
    json.map(function(item) {
      for(var prop in item) {
        if(item.hasOwnProperty(prop)) {
          if(typeof transforms[prop] !== 'undefined') {
            item[prop] = transforms[prop](item[prop])
          }
        }
      }
    })
    return json
  }

}
