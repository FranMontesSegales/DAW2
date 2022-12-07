const obj = {a: 1, b: 2};

function keysAndValues(obj) {
	const keys = Object.keys(obj);
    const values = Object.values(obj);
    
	return [keys,values];
}
console.log(keysAndValues(obj));