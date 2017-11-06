//"aabcb"
// 123454

//"aabab"
// 12345
 //    i

  //for (i = 0 to screen.length)
  //    
  //    therisAPalidnromCentered around i?
 //     //subfunc( )

  //   
  
  function centeredPalindromAround(s,i,j) {
      let left = i;
      let right = j; 
      while (left >= 0 && right < s.length && s[left]===s[right]) {
        //s[left])  
            left--;
            right++;
      }
//      left = -1
//      right = length
      //console.log(left+1);
      //console.log(right-1);
      //longest palindrom around i
      return s.substr(left+1,right-1-left)
      //starts at left+1
      //ends at right-1
    }

    function longestPalindrom(s) {
        let longest = ""
        for(i=0; i<s.length; i++) {
            let candidate1 = centeredPalindromAround(s,i,i);
            let candidate2 = centeredPalindromAround(s,i,i+1);
            if (candidate1.length > longest.length){
                longest = candidate1;
            }
            if (candidate2.length > longest.length){
                longest = candidate2;
            }
        }
        return longest;
    }
//console.log(centeredPalindromAround("ababa",2));
console.log(longestPalindrom("aabbaa"));
    


//  var centeredPalindrome = function(s, left, right) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       //expand in each direction.
//       left--;
//       right++;
//     }
//     return s.slice(left + 1, right);
// }
// console.log(centeredPalindrome("aba",0,4));



