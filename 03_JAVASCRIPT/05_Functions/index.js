function nice(name){
    console.log("hey " + name + " you are a good boy");
    console.log("hey " + name + " what you do?");
    console.log("hey " + name + " are you busy?");
    console.log("hey " + name + " lets play cricket");
}
nice("Amit");

function sum(a,b){
    console.log("The sum of " + a + " and " + b + " is " + (a+b));
}
sum(2,3);


function add1(a,b){
    return a+b;
}
result1 = add1(3,5);
console.log("the sum of these numbers is: " + result1);


function add2(a,b,c=5){
    return a+b+c;
}
result2 = add2(3,5);
console.log("the sum of these numbers is: " + result2);
result2 = add2(3,5,1);
console.log("the sum of these numbers is: " + result2);