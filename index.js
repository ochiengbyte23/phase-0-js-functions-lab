function calculateTax(amount){
    return (amount * 0.1);
}
function convertToUpperCase(test){
    return test.toUpperCase();
}
function findMaximum(num1, num2){
    if (num1 > num2){
        return num1;
    } else return num2;
}
function isPalindrome(word){
    return word == word.split("").reverse().join("");
}
function calculateDiscountedPrice(originalPrice, discountPercentage){
    return originalPrice - (originalPrice * discountPercentage / 100);
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };