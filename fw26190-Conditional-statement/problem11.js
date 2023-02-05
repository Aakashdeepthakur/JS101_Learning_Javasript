//Given stored username and password and input username and password, Print if the user can login or not.
let credential_username= "Aakash";
let credential_password="masai123";

//while we login

let username= "Aakash";
let password= "masai123";

if (credential_username == username){
  if(credential_password == password){
     console.log("User Login");

}
else{
  console.log("Password Incorrect");
}
}
else{
  console.log("Username Incorrect");
}