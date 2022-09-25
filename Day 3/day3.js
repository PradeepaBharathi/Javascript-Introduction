var json=[{
    Name:"Pradee",
    Dept:"Physics",
    College:"LDC"
},
{
    Name:"Priya",
    Dept:"Computer",
    College:"LDC"
}];
// //for loop
for(i=0;i<json.length;i++){
    var a=json[i];
  console.log(a);
};

// // for each loop
json.forEach(function(json) { console.log(json.Name); });

// // for in loop
for(let key in json){
    console.log(json[key].Dept);
}

// // for of loop
for (let x of json) {
 console.log(x.College);
}


 