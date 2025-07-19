// Create a discounte program using fucntion
function discountCalculator(discount) {
  return function(price){
    return price - price * (discount/ 100);
  };
}
let discounter = discountCalculator(20);
console.log(discounter(300));
console.log(".......................");