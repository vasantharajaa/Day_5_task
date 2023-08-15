let arr=["121","malayalam","DAD","12321","sleep","madam"];
let fun=el=>{
    
    let str=el;
    let i=0;
    let j=str.length-1;
    for(let k=0; k <j;k++){
        if(str.charAt(i)==str.charAt(j)){
            i++;
            j--;
    
        }
        else{
            return false;
        }

    }
    return true;
    
}
let pal=arr=>{
    return arr.filter(el=>fun(el));
}
console.log(pal(arr));