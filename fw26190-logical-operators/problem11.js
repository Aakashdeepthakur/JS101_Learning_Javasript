let a = 3;
let b = 5;
let c = 8;
if ((a>b) &&(a>c)){
  console.log(" a is greater ");
}
else if ((b>c) &&(b>a)){
  console.log("b is greater");
}

else  {
  console.log("c is greater");
}

// syntax for ternary operator

// condition ? true result :false result

((a>b) &&(a>c)) ? console.log(" a is greater ") : ((b>c) &&(b>a)) ? console.log("b is greater"): console.log("c is greater");