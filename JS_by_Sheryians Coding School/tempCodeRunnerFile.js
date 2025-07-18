function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage
console.log(countVowels("Rudra Swain")); // Output: 4
console.log(countVowels("Hello World")); // Output: 3
console.log("....................");