function isAnagram(str1, str2) {
    // 1. Handle edge cases (empty strings or different lengths)
    if (str1.length !== str2.length) return false;
    if (str1 === "" && str2 === "") return true; // Both empty strings are considered anagrams
  
    // 2. Convert strings to lowercase for case-insensitive comparison
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
    // 3. Create a character count object
    const charCount = {};
    for (const char of str1) {
      charCount[char] = (charCount[char] || 0) + 1; // Initialize count to 0 if not present
    }
  
    // 4. Check character counts in str2
    for (const char of str2) {
      if (!charCount[char]) return false; // Char not found in str1, not an anagram
      charCount[char]--; // Decrement count for each matching character in str2
    }
  
    // 5. Check if all characters in str1 have been matched (all counts are zero)
    for (const count in charCount) {
      if (charCount[count] > 0) return false; // Unmatched characters in str1
    }
  
    // 6. If all conditions met, the strings are anagrams
    return true;
  }
  
  // Example usage
  const str1 = "silent";
  const str2 = "listen";
  const str3 = "hello";
  const str4 = "world";
  
  console.log(str1, "and", str2, "are anagrams:", isAnagram(str1, str2)); // Output: True
  console.log(str3, "and", str4, "are anagrams:", isAnagram(str3, str4)); // Output: False
  