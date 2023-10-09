function fibb(n){
	if (n==0||n==1) return n;
	return fibb(n-1)+fibb(n-2);
}

for(let i=0;i<15;i++){
	console.log(fibb(i));
}