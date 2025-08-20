let arr = [1,11,5,7,13]

const greaterthanseven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}

console.log(arr.filter(greaterthanseven))