let arr = [1,2,4,5,7]

console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

arr[0] = 876;
console.log(arr)
console.log(typeof(arr))        // object
console.log(arr.toString())     // converts array into string
console.log(arr.join(" and "))  // joins the array by "and"
arr.pop(7)                      // pops out the last element 7 from the array
console.log(arr)                // --> {876,2,4,5}
arr.push(8)                     // pushes in 8 in the array
console.log(arr)                // --> {876,2,4,5,8}
arr.shift()                     // removes the first element 876 from the array
console.log(arr)                // --> {2,4,5,8}
arr.unshift(88)                 // adds 88 in the zeroth index
console.log(arr)                // --> {88,2,4,5,8}
delete arr[3]                   // it deletes the 3rd index value
console.log(arr)                // --> {88,2,4,<empty item>,8}
arr.splice(0,2)                 // takes out 2 elements from 0th index
console.log(arr)                // --> {4,<empty item>,8}

// concatenation
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
console.log(a1.concat(a2,a3))   // this does not change existing array
