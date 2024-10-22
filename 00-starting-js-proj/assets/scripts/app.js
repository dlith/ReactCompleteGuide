//import { apiKey, apiKey2 as value } from "./util";
//import key from "./util";

import * as util from "./util";

console.log(util.apiKey);
console.log(util.default);
console.log(util.apiKey2);


let userMessage = "Rickrolled";
const constMessage = "never gonna give, never gonna give";
console.log(userMessage);
console.log(constMessage);


function greet(message, defaultMessage = "Rickroll") {
  //console.log(message);
  //console.log(defaultMessage);
  return defaultMessage + ": " + message; 
}

console.log(greet(util.apiKey));
console.log(greet(util.apiKey2));