console.log("This is string tutorial");
let a = "Amit";

// Accessing characters
console.log(a);
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])

//Length of the array
console.log(a.length)

//Template literals
let name = "Amit"
let friend = "Raj"
console.log("His name is " + name + " and his friends name is " + friend)
console.log(`His name is ${name} and his friends name is ${friend}`)

// uppercase and lowercase
let b = "Shivam";
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.toLocaleLowerCase())
console.log(b.toLocaleUpperCase())

//Slicing a string
console.log(b.slice(1,4))
console.log(b.slice(1)) //starts from index 1

//replace
console.log(b.replace("Sh", "N"))

//Concatenation
console.log(b.concat(a))
console.log(b.concat(a, "das"))
console.log(b.concat(a, "das", "Roy"))