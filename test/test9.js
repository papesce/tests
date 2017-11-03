// 1. Given a square matrix print the elements in a diagonal manner. E.g.
// 4 5 8
// 2 4 9
// 1 2 6
// O/P:
// 4
// 2 5
// 1 4 8
// 2 9
// 6

let matrix = [[4,5,8],[2,4,9],[1,2,9]];

// m[0][0]       x 0 0   y 0 0    1    nm [0]

// m[1][0] m[0][1]  x 0 1  y 1 0   2   nm [1]

// m[2][0] m[1][1]  m[0][2]  x 0 1 2 y 2 1 0  3  nm[2]
  
//          m[2][1] m[1][2]  x 1 2 y 2 1  2  nm[3]

//                   m[2][2]  2 2  1  nm[4]

// m(c)(r)

// for (c = 0 to 2 (height))
// for r (c downto 0)
//  m[c,r]

function diagonal1(m) {
    let height = m.length;  //squared
    let result = [];
    let height2 = 2 * (height-1);
    let x,y;
    let z1,z2;
    for(let nr = 0; nr <= height2 ; nr++) {
        let row = []
        if (nr < height) {
            x = nr;
            z1 = 0; 
            z2 = nr;
        } else {
            x = height2 - nr
            z1 = nr - height + 1;
            z2 = height - 1;
        }
        for(let nc = 0; nc<=x ; nc++) {
            row.push(m[z2][z1]);
            z1++; z2--
        }
        result.push(row);
    }
    return result; 
}

// m[0][0]       m[j][i+j]   j=0  i=0

// m[1][0] m[0][1]  m[j][i+j]   j=1 i=-1   j=0  i=

// m[2][0] m[1][1]  m[0][2]  x 0 1 2 y 2 1 0  3  nm[2]
  
//          m[2][1] m[1][2]  x 1 2 y 2 1  2  nm[3]

//                   m[2][2]  2 2  1  nm[4]

function diagonal(a) {
    let m = a.length;
    let n = a.length;
    let b = 0;
    var out = new Array();
    for (var i = 1 - m; i < n; i++) {
        var group = new Array();
        for (var j = 0; j < m; j++) {
            if ((i + j) >= 0 && (i + j) < n) {
                group.push(a[j][i + j]);
            }
        }
        out.push(group);
    }
    return(out)
}

console.log(diagonal(matrix));

let eoutput = [[4],[2,5],[1,4,8],[2,9],[6]];
