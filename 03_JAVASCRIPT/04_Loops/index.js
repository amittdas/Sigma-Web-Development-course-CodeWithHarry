console.log("I am a tutorial on loops");

let a = 1;

//for loop
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}

let obj = {
    name: "AMIT",
    role: "programmer",
    company: "codewithAmit"
}
//for in loop
for (const key in obj) {
        const element = obj[key];
        console.log(key, element);
}

//for of loop
for (const c of "AMIT") {
    console.log(c);
}

let x = 0;
//while loop
while(x<6){
    console.log(x);
    x++;
}

let y = 0;
//do while loop
do {
    console.log(y);
} while (y>5);