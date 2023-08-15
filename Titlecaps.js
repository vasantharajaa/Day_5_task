/*let Titlecaps=function(String){
    let line=String.toLowerCase().split(" ");
    for(let i =0; i<line.length;i++){
        line[i]=line[i][0].toUpperCase()+line[i].slice(1);
    }
    console.log(line.join(''));
}
Titlecaps("i love indiA");



// IIFE

(
    (String)=>{
        let line=String.toLowerCase().split(" ");
        
    for(let i =0; i<line.length;i++){
        line[i]=line[i][0].toUpperCase()+line[i].slice(1);
    }
    console.log(line.join(" "));

    }
)("i love india");
*/
// Arrowfunction
let ans=(String)=>{
    let line=String.toLowerCase().split(" ");
    
for(let i =0; i<line.length;i++){
    line[i]=line[i][0].toUpperCase()+line[i].slice(1);
}
console.log(line.join(" "));

}
ans("i love india");
