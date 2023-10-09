async function add(n){
    let sum=0;
    for (let i=0;i<=n;i++){
        sum+=1;
    }return sum;
}
let start=new Date().getTime()
const a=await add(100_000_000);
const b=await add(100_000_000);
const c=await add(100_000_000);
const d=await add(100_000_000);
const e=await add(100_000_000);
const f=await add(100_000_000);
const g=await add(100_000_000);
const h=await add(100_000_000);
const z=await add(100_000_000);
let end=new Date().getTime();
console.log((end-start)/1000);