var a = "2" > "12";

if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

let login = '';
let message = (login == 'Employee') ?"welcome" :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);


let a ="boss";
if (a==="boss" )
{
  message = "welcome boss";
}
else
{
  message = "Go away";
}
  console.log(message);







let i = 3;
while (i) {
  console.log( i-- );
}

for(let i=1;i<=10;i++){
    console.log(i);
}


for (let num = 2; num <= 20 && num%2==0; num += 1) {
    console.log(num)
  }

  for (let num = 2; num <= 20 ; num += 1) {
    if(num%2==0){
    console.log(num)
     }}


let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);