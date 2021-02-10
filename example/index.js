const {WildMatch} = require('../native');

var match = new WildMatch()

let testlist = ["/manage/users*","/manage/lists*","/promo/coupon/*","/promo/referral*","/pgto/orders*","/master/users*","/defs*","/defs/policies*","/defs/products*","/defs/terms*","/defs/pages*","/admin/users*"]
for (var i in testlist) {
    match.insert(testlist[i])
}
let matches =match.matchOne("/manage/users?lalal-lalal")
console.log(matches)

let matchesAll =match.matchAll("/defs/produxsx")
console.log(matchesAll)

const {isMatch} = require('../native');
console.log(isMatch("/main/lalala", "/main/*"))