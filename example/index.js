const {WildMatch} = require('../native');
var match = new WildMatch()
match.insert("/main/*")
match.insert("/mainx/*")
match.insert("/mainy/*")
let matches =match.matches("/main/lalala")
console.log(matches[0])
