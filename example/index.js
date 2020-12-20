const {WildMatch} = require('../native');
var match = new WildMatch()
match.insert("/main/*/main")
match.insert("/mainx/*")
match.insert("/mainy/*")
let matches =match.matchOne("/main/lalala/main")
console.log(matches)

let matchesAll =match.matchAll("/main/lalala/main")
console.log(matchesAll[0])

const {isMatch} = require('../native');
console.log(isMatch("/main/lalala", "/main/*"))