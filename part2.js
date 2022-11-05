 let a=[1,2,3,4,5,6,7,8,9,10,11];
 let string="";
 for(i=0;i<a.length;i++){
     string+=a[i];
   
}
 console.log(string);


 let b=[1,2,3,4,5,6,7,8,9,10,11];
  let string1="";
 for(i=0;i<b.length;i++){
     if(i<b.length-1){
     string +=b[i]+",";
     }
     else{
         string +=b[i];   
     }
   
}
 console.log(string);

 let e=[1,2,3,4,5,6,7,8,9,10,11];
  let string2="";
 for(i=e.length-1;i>=0;i--){
     if(i<e.length){
     string +=e[i]+" ";
     }
     else{
        string +=e[i];   
    }
   
}
console.log(string);


 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 for (var i = 0; i <numsArr; i++) {
  if(numsArr[i] %2 == 0 )
 {
  numsArr[i] = "even";
 }
}
 console.log(numsArr);

 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 for (var i = 0; i <=10; i++) {
 if(i %2 === 0 )
  {
   numsArr[i]="even";
  }
}
console.log(numsArr);

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum3=0;
for(i=0;i<numsArr.length;i++){
    sum3+=numsArr[i];
}
console.log(sum);

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum2=0;
for(i=0;i<numsArr.length;i++){
    if(numsArr[i]%2===0){
    sum2+=numsArr[i];
    }
}
console.log(sum);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum1=0;
for(i=0;i<numsArr.length;i++){
    if(numsArr[i]%2==0){
    sum1+=numsArr[i];
    
    }
    else{
        sum1 -=numsArr[i];
    }
}
console.log(sum1);


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i <= numsArr.length; i++); {
    for(let j=0;j<numsArr[i].length;j++)
 console.log( numsArr[i][j])
 }
let array = [[11,12,13,14],[21,22,23,24,25],[31,32,33]];

for(let i of array)
for(let j of [i])
console.log(array[j]);

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
     str_all +=inner_array[j];
     console.log(str_all);
}
console.log(str_all);