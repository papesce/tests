var xs =  [1,2,3,4];

arraysEqual = (arr1, arr2) => {
    return arr1.length === arr2.length &&  arr1.every((elem,index) => {
        return elem === arr2[index]
        })
};

//console.log(xs.every((x) => x > 1));
console.log(arraysEqual([1,2,4],[1,2,4]));