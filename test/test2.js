//test case



//plan:
//  i = 0    currentsize = input.length
//  ispalinfrome("aaaabbaa")

//  i=0      currentsize = currentsize -1
//  ispalindrome("aaaabba")   substrign from 0 to 0+currentsize
//  i=1 
//  ispalindrome("aaabbas")   substrign from 1 to 1+currentsize

//until size == 1 or palindrome found
// o(n *  n  * o(palindrome))

ispalindrome = (stinput) => {
  return stinput.split('').reverse().join('') == stinput;
}

//console.log('palindrome', ispalindrome("aabb"));
//console.log('palindrome', ispalindrome("aabbaa"));

//o(3*n) o(n) 
longestPalindrome = (inputstring) => {
    
    let initialLength = inputstring.length;
    let currentLength = initialLength;
    while (currentLength > 0) {
        for(let i = 0; i + currentLength <= initialLength ; i++) {
            let substring = inputstring.substr(i, currentLength);
            if (ispalindrome(substring)) {
                return substring;
            }
        }
        currentLength--
    }
     return "";
}


//let input = "aaaabbaa"; 
let input = "abracadabra";
let expectedOutput = "aabbaa";
console.log('longestpalindrom', longestPalindrome("abracadabra"))
console.log('longestpalindrom', longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"))
