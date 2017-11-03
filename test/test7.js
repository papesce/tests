// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]
// `indent preformatted text by 4 spaces`
// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]



function sum_pairs( array, number) {
    //create a map to store the frequency of each number in the array
    let map = {};
    for(let i = 0; i < array.length; i++) {
        let n = array[i];
        let diff = number-n;
        let j = map[diff];
        if (j != undefined) { 
            return [array[j],n];
        } else {
            map[n] = i;
        }};          
    return undefined;
}


let l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

//Test.describe("Testing For Sum of Pairs", function(){
console.log(sum_pairs(l1, 8), [1, 7]) //, "Basic: ["+l1+"] should return [1, 7] for sum = 8");
//Test.expect(sum_pairs(l2, -6)+"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
//Test.expect(sum_pairs(l3, -7) == undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
//Test.expect(sum_pairs(l4, 2)+"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
//Test.expect(sum_pairs(l5, 10)+"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
//Test.expect(sum_pairs(l6, 8)+"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
//Test.expect(sum_pairs(l7, 0)+"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
//Test.expect(sum_pairs(l8, 10)+"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
//});

//console.log(sum_pairs([11, 3, 7, 5],10)) // -> [3,7]

