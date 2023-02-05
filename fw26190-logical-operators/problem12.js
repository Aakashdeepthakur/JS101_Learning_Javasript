let a= "goku";
let b= "goku";
let c= "gon";
if (a==b && b==c && c==a){
  console.log("all the names are same");
}
else if((a==b) && (b!=c)){
  console.log("a,b");
}
else if ((a!=b) && (b==c)){
  console.log("b,c");
}
else if ((c==a) && (c!=a)){
  console.log("c,a");
}
else{
  ("all names are different");
}