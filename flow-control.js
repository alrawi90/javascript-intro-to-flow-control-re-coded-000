'use strict';
function basicTeenager(age) {
  if (age <=19 && age >=13){return "You are a teenager!";}
}
function teenager(age) {
  if (age <=19 && age >=13){return "You are a teenager!" ;}
  else if(age > 19 || age < 13){return "You are not a teenager" ;}
}
function ageChecker(age) {
  if (age <=19 && age >=13){return "You are a teenager!" ;}
  else if (age < 13){return "You are a kid" ;}
  else{return "You are a grownup";}
}
function ternaryTeenager(age) {
  return (age > 19 || age < 13) ? "You are not a teenager" : "You are a teenager" ;
}
function switchAge(age) {
switch(true) {
  case (age <=19 && age >=13) :
  return "You are a teenager";
    break;

  default:
  return "You have an age";
  break;
}
}
