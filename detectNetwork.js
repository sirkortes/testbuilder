// Given a credit card number, 
// this function should return a string with the name of a network
// Example: detectNetwork('343456789012345') should return 'American Express'
// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var detectNetwork = function(cardNumber) {

    // Note: `cardNumber` will always be a string
    var prefix6 = cardNumber.substring(0, 6);
    var prefix4 = cardNumber.substring(0, 4);
    var prefix3 = cardNumber.substring(0, 3);
    var prefix2 = cardNumber.substring(0, 2);
    var length = cardNumber.length;

    // The Diner's Club network 
    if ((prefix2 === '38' || prefix2 === '39') && length === 14) {
        return 'Diner\'s Club';
    }

    // The American Express network 
    if ((prefix2 === '34' || prefix2 === '37') && length === 15) {
        return 'American Express';
    }

    // MasterCard 
    if ((Number(prefix2) >= 51 && Number(prefix2) <= 55) && length === 16) {
        return 'MasterCard';
    }

    // Discover 
    if ((prefix4 === '6011' || prefix2 === '65') && (length >= 16 || length <= 19)) {
        return 'Discover';
    } else if ((Number(prefix3) >= 644 && Number(prefix3) <= 649) && (length >= 16 || length <= 19)) {
        return 'Discover';
    }

    // Maestro 
    if ((['5018', '5020', '5038', '6304'].indexOf(prefix4) >= 0) && (length >= 12 && length <= 19)) {
        return 'Maestro';
    }

    // China UnionPay 
    if ((Number(prefix6) >= 622126 && Number(prefix6) <= 622925) && (length >= 16 && length <= 19)) {
        return 'China UnionPay';
    } else if ((Number(prefix4) >= 6282 && Number(prefix4) <= 6288) && (length >= 16 && length <= 19)) {
        return 'China UnionPay';
    } else if ((Number(prefix3) >= 624 && Number(prefix3) <= 626) && (length >= 16 && length <= 19)) {
        return 'China UnionPay';
    }

    // Switch 
    var swicthLengths = [16, 18, 19];
    var switchPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
    if ((switchPrefixes.indexOf(prefix6) >= 0 || switchPrefixes.indexOf(prefix4) >= 0) && swicthLengths.indexOf(length) >= 0) {
        return 'Switch';
    }

    // Visa 
    if (cardNumber[0] === '4' && (length === 13 || length === 16 || length === 19)) {
        return 'Visa';
    }

    // None
    return "No Network found for card number: " + cardNumber;

};