 //ODD NUMBERS - Anonymous Function
let j=function(array){
    for(let i=0;i<array.length;i++){
if(array[i]%2!=0){
    console.log(array[i]);
}

    }
};
j([1,2,3,5,6]);


 //IIFE
(function(array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
        
            }
})([1,2,3,4,5]);

let odd=(array)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
        
            }
}
odd([1,2,3,4,5]);



//2. Title Case 
let y=function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   console.log( str.join(' '));
  }
  y("Pradeepa bharathi gandhi");
  //IIFE

  (function(str){
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   console.log( str.join(' '));

  }("Pradeepa bharathi gandhi"));

let title=(str)=>{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   console.log( str.join(' '));

  }
  title("Pradeepa bharathi gandhi");


 //3. Sum of numbers in a array
    let b =function(array){
        let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    console.log(sum);
};
b([1,2,3,4,5]);

// IIFE
(function(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    console.log(sum);
}([1,2,3,4,5]));

let sum =(array)=>{
    let sum=0;
for(let i=0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);
};
sum([1,2,3,4,5]);



//4. Find the prime numbers in a array
 let x=function(arr){
    let a=[];
  arr.forEach((num )=> {
    let factor=0;
    for(i=0;i<=num;i++){
        if(num%i===0){
            factor++;
        }
    }
    if(factor===2){
        a.push(num);
    }
  })
  console.log(a);
};       
x([3,8,9,27,11,2,5]);

 //
(function(array){
    let a=[];
  array.forEach((num )=> {
    let factor=0;
    for(i=0;i<=num;i++){
        if(num%i===0){
            factor++;
        }
    }
    if(factor===2){
        a.push(num);
    }
  })
  console.log(a);
}([3,8,9,27,11,2,5]));


let prime=(arr)=>{
    let a=[];
  arr.forEach((num )=> {
    let factor=0;
    for(i=0;i<=num;i++){
        if(num%i===0){
            factor++;
        }
    }
    if(factor===2){
        a.push(num);
    }
  })
  console.log(a);
};       
prime([3,8,9,27,11,2,5]);


//5.Palindrome
function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
           
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
let p=function(array){
    for(let i =0;i<array.length;i++){
        let answer=isPalindrome(array[i]);
        if (answer=== false){
            console.log(false);
            
        }
        else{
        console.log(true);
        }
        
    }
}
p(["Pradee","madam"]);

// IIFE
(function(array){
    for(let i =0;i<array.length;i++){
        let answer=isPalindrome(array[i]);
        if (answer=== false){
            console.log(false);
            
        }
        else{
        console.log(true);
        }
        
    }
}(["Pradee","madam"]));


let palindrome=(array)=>{
    for(let i =0;i<array.length;i++){
        let answer=isPalindrome(array[i]);
        if (answer=== false){
            console.log(false);
            
        }
        else{
        console.log(true);
        }
        
    }
}
palindrome(["Pradee","madam"]);


//6. duplicate values
let a=function(array){
   let b=[...new Set(array)];
   console.log(b);
}
a([1,2,3,4,1,3,6,6]);

 //IIFE
(function(array){
    let b=[...new Set(array)];
   console.log(b);
}([1,2,3,1,2,3,4,5]));

let dup=(array)=>{
    let b=[...new Set(array)];
    console.log(b);
 }
 dup([1,2,3,4,1,3,6,6]);


 //7. rotate
function reverse(array , li , ri){
    while(li < ri){
         let temp = array[li];
         array[li]= array[ri];
         array[ri] = temp;
         console.log(temp);
         li++;
         ri--;
       }
   }

   let l=function(array,k){
    k = k % array.length;
  if(k < 0){
    k += array.length;
}              
 reverse(array, 0, array.length - k - 1);
  reverse(array, array.length - k, array.length - 1);
reverse(array, 0, array.length - 1);
   }
l(([1,2,3,4] , 3));
   
(function(array , k){
  k = k % array.length;
  if(k < 0){
    k += array.length;
}              
 reverse(array, 0, array.length - k - 1);
  reverse(array, array.length - k, array.length - 1);
reverse(array, 0, array.length - 1);
})([1,2,3,4] , 3);


let rotate=(array,k)=>{
    k = k % array.length;
  if(k < 0){
    k += array.length;
}              
 reverse(array, 0, array.length - k - 1);
  reverse(array, array.length - k, array.length - 1);
reverse(array, 0, array.length - 1);
   }
rotate(([1,2,3,4] , 3));