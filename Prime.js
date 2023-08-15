/*
let arr=[1,2,3,4,5,6,7,8,9];
let res=[];
let prime=function(arr){
    
    
    for(let i =0; i<arr.length;i++){
        let factorcount=0;
        for(let num=1;num <=arr[i];num++){
            if(arr[i] % num ===0){
                factorcount++;
            }
            

        }
        
        res.push(factorcount);
    }
    let index=[];
    for(let i=0; i<arr.length;i++){
        if(res[i] == 2){
            index.push(i);

        }
    }
    let ans=[];
    for(let i=0;i<index.length;i++){
        ans.push(arr[index[i]]);
       
    }
    console.log(ans);

}
prime(arr);
*/
/*
//IIFE
let arr=[1,2,3,4,5,6,7,8,9];
let res=[];
((arr)=>{
    
    
    for(let i =0; i<arr.length;i++){
        let factorcount=0;
        for(let num=1;num <=arr[i];num++){
            if(arr[i] % num ===0){
                factorcount++;
            }
            

        }
        
        res.push(factorcount);
    }
    let index=[];
    for(let i=0; i<arr.length;i++){
        if(res[i] == 2){
            index.push(i);

        }
    }
    let ans=[];
    for(let i=0;i<index.length;i++){
        ans.push(arr[index[i]]);
       
    }
    console.log(ans);

})
(arr);
*/
//Arrow
let arr=[1,2,3,4,5,6,7,8,9];
let res=[];
let fun= (arr)=>{
    
    
    for(let i =0; i<arr.length;i++){
        let factorcount=0;
        for(let num=1;num <=arr[i];num++){
            if(arr[i] % num ===0){
                factorcount++;
            }
            

        }
        
        res.push(factorcount);
    }
    let index=[];
    for(let i=0; i<arr.length;i++){
        if(res[i] == 2){
            index.push(i);

        }
    }
    let ans=[];
    for(let i=0;i<index.length;i++){
        ans.push(arr[index[i]]);
       
    }
    console.log(ans);

}
fun(arr);

