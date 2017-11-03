//Merge Overlapping Intervals
//http://www.geeksforgeeks.org/merging-intervals/

//let input = {{1,3}, {2,4}, {5,7}, {6,8} }

//{1,3}, {2,4}   3 > 2 
// output = {{1.4} {5,8}} 

//preconditions:
//sorted?

//Solution1
//--sort by first number
// iterate over intervals 
//for each interval 
//search for an overlaping and if overlaps merge to the current

class I {
    constructor(x,y){
        this.x=x
        this.y=y
    }
    merge(otherInterval) {
        return new I(Math.min(this.x, otherInterval.x),
            Math.max(this.y, otherInterval.y))
        
    }
    overlaps(otherInterval) {
        return this.y > otherInterval.x 
    }
}


// [[1,3],[2,6],[8,10],[15,18]]
//let intervals = [new I(2,4), new I(1,3), new I(5,7), new I(6,8)];
let intervals = [new I(1,3), new I(2,6), new I(8,10), new I(15,18)];

//  stack[1,3]
// for 

function mergeOverlaping(intervals) {

    intervals.sort( (i1, i2) => i1.x > i2.x);
    let stack = []; 
    let head, tail;
    [head, ...tail] = intervals;
    stack.push(head);
        
    for (interval of tail) {
        let top = stack[stack.length-1];
        if (top.overlaps(interval)) {
            stack.pop();
            stack.push(top.merge(interval));
        } else {
            stack.push(interval);
        
        }
    }
    return stack;
}

console.log('original (not sorted)', intervals);
console.log('final: ', mergeOverlaping(intervals));
console.log('original (sorted)', intervals);



//Sort Appraich
