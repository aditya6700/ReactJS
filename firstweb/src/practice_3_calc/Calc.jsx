
function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let diff = a-b;
    return diff;
}

function mul(a,b){
    let pro = a*b;
    return pro;
}

function divi(a,b){
    let part = a/b;
    part = part.toFixed(2);
    return part;
}

export {add, sub, mul, divi};