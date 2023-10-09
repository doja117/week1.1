function add(x,y){return x+y}


function doSomething(x,y,z){
	return z(x,y);
}

console.log(doSomething(2,3,add));
