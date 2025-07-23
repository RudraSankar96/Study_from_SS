// Example of fillter() method.
// Print the number which is greater than 12.
let num1 =[1,2,3,4,5,6,7,8,9,4,5,6,12,3,55,66,,44,78];
let newnum=num1.filter(function(val){
    if(val > 12 ) return true;
    
});
newnum.sort(function(a,b){
        return a - b;
    });
console.log(newnum);
console.log("..........................");