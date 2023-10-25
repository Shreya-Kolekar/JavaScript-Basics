const accountID = 13335;
let acctEmail = "njunse@gmail.com";
var acctPassword = "1234";
acctCity = "Jaipur";

acctEmail = "jnuen@gmail.com";
acctPassword = "212121";
acctCity = "Kolhapur";

console.log(accountID);

console.table([accountID, acctEmail, acctPassword, acctCity]);

/* Prefer not to use var, bcaz of issue in block scope and functional scope */