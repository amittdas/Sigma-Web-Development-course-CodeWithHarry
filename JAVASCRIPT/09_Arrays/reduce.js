let arr = [1,2,3,4,5,6]

const mul = (a,b)=>{
    return a*b;
}
console.log(arr.reduce(mul));


const add = (a,b)=>{
    return a+b;
}
console.log(arr.reduce(add));