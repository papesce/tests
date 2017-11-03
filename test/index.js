var _ = require('underscore')

function transpose2(matrix) {
    //return _.zip.apply(null, matrix);
    return _.zip.apply(this, matrix);
    
    //let transposed = [];
    //if (matrix.length === 0) return transposed;
    //return matrix[0].map((v,i) => matrix.map((row) => row[i]) );

//    matrix[0] 
//    [(1),2,3].map( (1,0) =>  [(r1),r2] matrix.map( [1,2,3] => row[0] = 1
//                           [r1,(r2)] matrix.map( [4,5,6] =>)row[0] = 4
//                 (2,1) =>
//                 (3,2) =>
//    });


//1 2 3      1 4
//4 5 6      2 5
//           4 6



   // let width = matrix[0].length;
   // let height = matrix.length;

    for(let j = 0; j < width; j++) {
        transposed[j] = [];
        for (let i = 0; i < height; i++) {
            transposed[j][i] = matrix[i][j]
        }
    }
    
    //transposed[0][0] = matrix[0][0]
    //transposed[0][1] = matrix[1][0]

    //transposed[1][0] = matrix[0][1]
    //transposed[1][1] = matrix[1][1]
    
    //transposed[2][0] = matrix[0][2]
    //transposed[2][1] = matrix[1][2]

    
    return transposed;
} 

console.log("transpose1:", transpose2([])); //([])
console.log("transpose1:", transpose2([[1]])); // [[1]]
//1 2           1 3
//3 4           2 4
console.log("transpose1:", transpose2([[1,2],[3,4]])); // [[1,3],[2,4]] 
//1 2 3      1 4
//4 5 6      2 5
//           4 6
console.log("transpose1:", transpose2([[1,2,3],[4,5,6]])); // [[1,4],[2,5],[4,6]]
//1 2 3     1 4 7
//4 5 6     2 5 8
//7 8 9     3 6 9
console.log("transpose1:", transpose2([[1,2,3],[4,5,6],[7,8,9]])); // [[1,4,7],[2,4]]




//test cases:
//transpose([]) = []
//transpose([[1])) = [[1]]
//transpose [[.].[.]]  > 1 
//simetrical

//function transpose2(matrix) {
//    return matrix[0].map((value,index) => 
//        matrix.map(row => row[index]
//    ));
//}

// [1,2,3]
// [4,5,6]
//t
// [1 4]
// [2 5]
// [3 6]


function transpose(matrix) {
  console.log("initial matrix ", matrix);
  let heigth = matrix.length;
  let width = matrix[0] instanceof Array ? matrix[0].length : 0;   
  let transposed = [];
  //init transposed
  for(let i = 0; i<width; i++) {
     transposed[i] =[];
     for(let j = 0; j < heigth; j++) {   
        transposed[i][j] = matrix[j][i];
       //console.log("transposed ", transposed);
      }
    }

  return transposed;
}
//console.log("transposed1:", transpose([]));
//console.log("transposed1:", transpose([[1]]));
//console.log("transposed1:", transpose([[1,2,3],[4,5,6]]));
//[[1,2,3],[4,5,6],[7,8,9]];

//console.log("transposed2:", transpose(matrix));

//console.log("initial transposed", transposed);
  //swap t[i][j] = x [j][i]
  //transposed[0][0] = matrix[0][0]
  //transposed[0][1] = matrix[1][0]
  //transposed[0][2] = matrix[2][0]
  
  //transposed[1][0] = matric[0][1]