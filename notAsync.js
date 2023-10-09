function add(n){
    let sum=0;
    for (let i=0;i<=n;i++){
        sum+=1;
    }return sum;
}
let start=new Date().getTime()
const a=add(100_000_000);
const b=add(100_000_000);
const c=add(100_000_000);
const d=add(100_000_000);
const e=add(100_000_000);
const f=add(100_000_000);
const g=add(100_000_000);
const h=add(100_000_000);
const z=add(100_000_000);
let end=new Date().getTime();
console.log((end-start)/1000);