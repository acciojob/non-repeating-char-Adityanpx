function firstNonRepeatedChar(str) {
    let charCount = {}; // Object to store character frequencies

    // Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no non-repeating character found
}

// Do not change the code below
const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input));
