const {WildMatch} = require('../native');
var match = new WildMatch()
match.insert("/main/*/main")
match.insert("/mainx/*")
match.insert("/mainy/*")
let matches =match.matches("/main/lalala/main")
console.log(matches[0])

const {isMatch} = require('../native');
console.log(isMatch("/main/lalala", "/main/*"))