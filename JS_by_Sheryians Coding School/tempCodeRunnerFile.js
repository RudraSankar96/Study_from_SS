function findMax(a, b, c) {
  if(a>b && a>c) return "a is greater";
  if(b>a && b>c) return b;
  else{
    return "c is greater"
  }
}
console.log(findMax(4, 9, 2)); // Output: 9