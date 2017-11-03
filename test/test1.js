reverse = (st) => {
   return st.split('').reverse().join('');
}


newReverse = (st) => {
    return [...st]
}


console.log(newReverse("abc"));
