let arr=[2,3,4,5,6,7,8,9,1,10];
//Anonymous function
/*
let Sum=function(arr){
    var sum =0;
    for(let i =0; i <arr.length;i++){
        sum +=arr[i];

    }
    console.log (sum);
}
Sum(arr);


// IIFE
(
    (arr)=>{
        var sum =0;
    for(let i =0; i <arr.length;i++){
        sum +=arr[i];

    }
    console.log (sum);

    }
)(arr);
*/

// Arrow function
let Sum=(arr)=>{
    var sum =0;
for(let i =0; i <arr.length;i++){
    sum +=arr[i];

}
console.log (sum);

}
Sum(arr);


