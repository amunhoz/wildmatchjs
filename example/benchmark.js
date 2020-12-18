const { exec, match, parse } = require('matchit');
const count = 10000
var routes = []
var datex = new Date()
for (i = 0; i < count; i++) {
  routes.push(parse(`/test/i${i}/*`))
}
console.log("MATCHIT", "parse",  Math.abs(new Date() - datex), " milliseconds")
datex = new Date()

for (i = 0; i < count; i++) {
    let x = match(`/test/i${i}/${i}`, routes)    
}
console.log("MATCHIT", "match",  Math.abs(new Date() - datex), " milliseconds")
datex = new Date()


const {WildMatch} = require('../native');
var wmatch = new WildMatch()
for (i = 0; i < count; i++) {
    wmatch.insert(`/test/i${i}/*`)    
}
console.log("WILDMATCH", "insert",  Math.abs(new Date() - datex), " milliseconds")
datex = new Date()

for (i = 0; i < count; i++) {
     let x = wmatch.matches(`/test/i${i}/${i}`)    
}
console.log("WILDMATCH", "match",  Math.abs(new Date() - datex), " milliseconds")

  