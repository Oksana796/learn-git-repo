 const s = (n) => n+1;
 const add = (a,b) => {
    for (let i = 0; i <b; i++) {
        a = s(a);
    }
    return a;
}

console.log(add(2, 3));
 