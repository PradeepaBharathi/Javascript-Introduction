var obj1 ={name:"Person1",age:5};
var obj2={age:4,name:"Person2"};
var flag=true;
if(Object.keys(obj1)==Object.keys(obj2)){
    for(keys in obj1){
        if(obj1[keys]===obj2[keys]){
            continue
        }
        else{
            flag=false;
            break;
        }
    }
};
console.log("objects are"+" "+flag);

