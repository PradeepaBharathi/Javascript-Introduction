// let request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function(){
//   var data=JSON.parse(request.response);
//   console.log(data);
//   data.forEach((element)=>{
//     console.log(element.flags);
// })};



let request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload = function(){
  var data=JSON.parse(request.response);
  console.log(data);
  data.forEach((element)=>{
    console.log(element.name,element.region,element.subregion,element.population);
})}
