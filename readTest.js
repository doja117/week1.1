const fs=require('fs');
const { parse } = require('path');

function sum(n){
    let sum=0;
    for (let i=0;i<=n;i++){
        sum+=i;
    }   return sum;
}
fs.readFile('./ch.txt','utf8',(err,data)=>{
    if (err){
        console.log("ERRL: ",err)
        return;
    }
    const parsedContent=parseInt(data);
    if (!isNaN(parsedContent)){
        console.log(sum(parsedContent));
    } else{
        console.log("ERROR : NOT VALID NUMBER");
    }
})