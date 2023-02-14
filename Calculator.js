var arr=[]; 
for(var i=1;i<=3;i++){
var x=Number(prompt("enter a number"));
arr.push(x);
}
console.log(arr);

 
function sum(arr){
    var sum=0;
    for(var i=0;i<=arr.length-1;i++){
        sum+=arr[i];
    }
var arrSum=arr.join("+") ;  

console.log("sum of the 3 values "+arrSum+" = "+sum);
}
sum(arr)


function multi(arr){
    var multi=1;
    for(var i=0;i<=arr.length-1;i++){
        multi*=arr[i];
    }
    var arrMulti=arr.join("*" ); 
   
    console.log("multiplication of the 3 values "+arrMulti+" = "+multi);
}
multi(arr)

function devid(arr){
    var devid=1;
    for(var i=0;i<=arr.length-1;i++){
       devid=1/(devid/=arr[i]);
    }
    var arrDevid=arr.join("/"); 
    console.log("Devision of the 3 values "+arrDevid+" = "+devid);
}
devid(arr)

