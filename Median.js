/*
//ANONYMOUS
let arr1=[1,2,3,4,5,6,7];
let arr2=[4,5,6,7,8,9,10];
let ans=[];
let fun=function(arr1,arr2){
    

        let m=(0+arr1.length-1)/2;
        ans.push(arr1[m]);
        ans.push(arr2[m]);

    console.log(ans);

}
fun(arr1,arr2);
*/

// IIFE
let arr1=[1,2,3,4,5,6,7];
let arr2=[4,5,6,7,8,9,10];
let ans=[];
let fun=(arr1,arr2)=>{
    

        let m=(0+arr1.length-1)/2;
        ans.push(arr1[m]);
        ans.push(arr2[m]);

    console.log(ans);

}
fun(arr1,arr2);