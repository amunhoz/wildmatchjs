# rust-wildmatch


Is [wildmatch](https://github.com/becheran/wildmatch)'s nodejs binding


## Usage
```
npm i --save wildmatchjs
```
```js
const WildMatch = require('wildmatchjs');

var match = new WildMatch()

match.insert("/main/*")
match.insert("/mainx/*")
match.insert("/mainy/*")

let matches = match.matches("/main/lalala")

//return one or more ocorrencies
console.log(matches[0]) // "/main/*"

```

build using NEON
see: [neon docs](https://neon-bindings.com/docs/electron-apps/)

## Requirement

- [Rust & Cargo](https://www.rust-lang.org/learn/get-started)

