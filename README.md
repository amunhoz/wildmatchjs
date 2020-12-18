# rust-wildmatch


Is [wildmatch](https://github.com/becheran/wildmatch)'s nodejs binding

## Usage

```js
const {WildMatch} = require('wildmatchjs');

var match = new WildMatch()

match.insert("/main/*")
match.insert("/mainx/*")
match.insert("/mainy/*")

let matches = match.matches("/main/lalala")

//return one or more ocorrencies
console.log(matches[0]) // "/main/*"

const {isMatch} = require('../native');
console.log(isMatch("/main/lalala", "/main/*")) // true

```

build using NEON
see: [neon docs](https://neon-bindings.com/docs/electron-apps/)

## Requirement

- [Rust & Cargo](https://www.rust-lang.org/learn/get-started)

## Benchmark 10000 ops
```
MATCHIT parse 19  milliseconds
MATCHIT match 2460  milliseconds
WILDMATCH insert 20  milliseconds
WILDMATCH match 7209  milliseconds
```
* Not faster than matchit, but is a good example on how to create classes with neon binding
Feel free to sugest optmizations.
