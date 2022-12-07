const o = { "z": "q", "w": "f" }

function invert(o) {

	let arr = Object.entries(o);
    const mapeo = arr.map(([key, value]) => [value, key]);
    return Object.fromEntries(mapeo);
}
  
console.log(invert(o));