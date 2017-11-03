//1 2 3 4
//4 5 6 7
//7 8 9 0 

//1 4 7
//2 5 8
//3 6 9
//4 7 0

//[]  
//[2]
//[2 3]   
//[4 5]
let input = [[1,2,3,4],[4,5,6,7],[7,8,9,0]];

//modeling
function transpose(m) {
    let r = [];
    if (m.length === 0) return r;
    let height = m.length;
    let width = m[0].length;
    for(let i = 0; i < width; i++) {
        r[i] = [];
        for(let j = 0; j < height; j++) {
             r[i][j] = m[j][i];
        }
    }
    return r;    
}

class Wrapper {
    constructor(m){
        this.m= m;
    }
    get(x,y) {
        return this.m[y,x];
    }
}

//(o1)
function transpose2(m) {
    return new Wrapper(m);
}

//o(1
//let m2 = transpose2(m);
//m2.get(1,0);

//m * n  o(m * n)

//console.log('transpose', transpose([]))
console.log('transpose', transpose(input))
//output = [[1,4,7],[2,5,8],[3,6,0]]

Array.prototype.transpose = (x,y) => this[y][x];

let m1 = [[1,2],[3,4]];
console.log(m1.transpose(0,0));