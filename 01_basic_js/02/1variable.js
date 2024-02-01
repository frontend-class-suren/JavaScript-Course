const accountId = 12345
let accountEmail = "abc@google.com"
var accountPassword = "123123"
accountCity = "butwal"
let accountState;

// accountId = 2 // not allowed


accountEmail = "somarjun@tech.com"
accountPassword = "21212121"
accountCity = "sita rice mill"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])