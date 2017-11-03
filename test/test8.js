//You are given two strings A and B. Length of string A does not exceed the length of string B.
//Figure out if string A is present in B as a subsequence. 

let a = "myfirststring";
let b = "mysecondstringmyfirststringmycontinuationstring";


//console.log(b.indexOf(a) != -1);

function indexOf() {
    let j = 0;
    for(let i=0; i<=b.length; i++){
        if (b[i] === a[j]) {
            j = j + 1;
            if (j === a.length) {
                return true;
            }
        } else {
            j = 0;
        }
    }   
    return false;
};

console.log(indexOf());