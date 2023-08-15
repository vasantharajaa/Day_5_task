/*let arr=[1,2,3,4,5,6,7];
let k=1;
let fun=function(arr){
    for(let i =0; i <k;i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
}
fun(arr);
*/

//IIFE

let arr=[1,2,3,4,5,6,7];
let fun=(arr,k)=>{
    for(let i =0; i <k;i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
}
fun(arr,5);
