//Given an array of integers find three numbers whose sum equals zero.  


//let array = []   ->  []
//let array = [4,1,3,-1,2,0,5]   ->  [1,-1,0]


//brute - force all combintions of the form (x,y,z)
let input = [0, -1, 2, -3, 1];

function equalsZero(input) {
    for (i = 0; i < input.length; i++) {
        for (j= i+1; j < input.length; j++) {
            for (k = j+1; k < input.length; k++) {
                //console.log([i,j,k]);
                let triplet = [input[i], input[j], input[k]];
                if (triplet.reduce( (a, b) => a+b, 0) == 0) {
                    return triplet;
                }
            }
        }
    }
    return [];
}

function equalsZero2(input) {
    for (j = 0; j < input.length; j++) {
        let number = input[j];
        let map = {};
        for(let i = j+1; i < input.length; i++) {
           
            let n = input[i];
            let diff = number - n; 
            if (map[diff] != undefined) {
                return [number, diff,n];
            } 
            map[n] = i;
        }
            
    }
    return [];
}

// [1,4,6,-4]  10  ->  [4,6]  
function sumofTwo(array, number) {
    let map = {};
    for(let i = 0; i < array.length; i++) {
        let n = array[i];
        let diff = number - n; 
        if (map[diff] != undefined) {
            return [diff,n];
        } 
        map[n] = i;
    }
    return undefined;
}

//console.log(sumofTwo([0, -1, 2, -3, 1], 2) ); 

console.log(equalsZero2([0, -1, 2, -3, 1])); 
//complexity o^3

//Soultion 2:
//




//sort
//array [,-4,-2,0,1,3,4,6]
//3 pointes x y z
//http://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/

