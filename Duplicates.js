// Anonymous function
let arr=[1,1,2,2,3,4,5,5,6,7,8,8,8,9,9,9,9];
let res=[];
let fun=function(arr){
    
   for(let i=0; i <arr.length-1;i++){
    if(arr[i] != arr[i+1]){
        res.push(arr[i]);
        
    }
    
   }
   if(arr[arr.length-1] != res[res.length-1]){
    res.push(arr[arr.length-1]);
   }
   console.log(res);   

    }
   

fun(arr);

let arr=[1,1,2,2,3,4,5,5,6,7,8,8,8,9,9,9,9];
let res=[];
let fun=(arr)=>{
    
   for(let i=0; i <arr.length-1;i++){
    if(arr[i] != arr[i+1]){
        res.push(arr[i]);
        
    }
    
   }
   if(arr[arr.length-1] != res[res.length-1]){
    res.push(arr[arr.length-1]);
   }
   console.log(res);   

    }
   

fun(arr);
