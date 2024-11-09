/*
As stated in the assessment:
Input: "ADOBECODEBANC", "ABC"
Incorrect Output Provided: "BANCC"

However, the correct output should be: "BANC".
*/

function minimumSubString(sourceString, targetString) {
    // Handling Invalid Cases
    if (sourceString === "" || targetString === "") return ""; 
    if (sourceString.length < targetString.length) return "";

    let minimumSubstring = "";
    let minimumLength = Infinity;

    // Going through all possible substrings of sourceString using loop
    for (let start = 0; start < sourceString.length; start++) {
        for (let end = start + 1; end <= sourceString.length; end++) {
            let substring = sourceString.slice(start, end);
            
            if (containsAllChars(substring, targetString)) {
                // Replacing the minimumSubString with current string if it is smaller than previous minimumSubString
                if (substring.length < minimumLength) {
                    minimumLength = substring.length; 
                    minimumSubstring = substring;
                }
            }
        }
    }
    return minimumSubstring;
}

// Checking if the substring contains all characters of targetString
function containsAllChars(substring, targetString) {
    let targetCharCount = {};
    for (let char of targetString) {
        targetCharCount[char] = (targetCharCount[char] || 0) + 1;
    }

    for (let char of substring) {
        targetCharCount[char]--;
    }

    for (let key in targetCharCount) {
        if (targetCharCount[key] > 0) { 
            return false;
        }
    }
    return true;    
}

let sourceString = "ADOBECODEBANC";
let targetString = "ABC"

console.log("The minimum SubString of", sourceString, "containing all characters of", targetString, "is", minimumSubString(sourceString, targetString));