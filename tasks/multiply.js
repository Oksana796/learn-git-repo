const s = (n) => n + 1;
const multiply = (a, b) => {
  let result = 0;
  for (let i = 0; i < b; i = s(i)) {
    result = result + a;
  }
  return result;
};

console.log(multiply(3, 3));
