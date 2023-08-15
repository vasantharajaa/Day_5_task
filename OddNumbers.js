//1.Print odd numbers in an array

//Anonymous function
/*let arr =[2,3,4,6,9,11];
const odd=function(){
     for(let i =0; i <arr.length;i++){
        if(arr[i] %2 != 0){
            console.log("Odd Number "+arr[i]);
        }
     }

}
odd();

// IIFE using Arrowfunction
let arr =[2,3,4,6,9,11];
(
    ()=>{
        for(let i =0; i <arr.length;i++){
            if(arr[i] %2 != 0){
                console.log("Odd Number "+arr[i]);
            }
         }

    }
)();
*/
 // Arrow function
 let arr =[2,3,4,6,9,11];

   let ans= (arr)=>{
        for(let i =0; i <arr.length;i++){
            if(arr[i] %2 != 0){
                console.log("Odd Number "+arr[i]);
            }
         }

    }
ans(arr);



