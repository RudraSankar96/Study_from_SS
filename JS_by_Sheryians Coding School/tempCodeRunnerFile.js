// Print the even number using fillter() method. And sort them in asecnding order.
let num2 = [45,36,89,99,90,98,2,12];
let newarr= num2.filter(function(val){
    if(val % 2 === 0) return true ;
});
newarr.sort(function(a,b){
    return a -b ;
});
console.log(newarr);
console.log(".........................");