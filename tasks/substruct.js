const s = (n) => n+1;
const substruct = (a,b) => {
    let r = 0;
   for (let i = b; i < a; i++) {
    r = s(r);

   }
   return r;
}

console.log(substruct(8,7));