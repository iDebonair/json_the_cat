/*const sum = (a,b)=> {
  return (a+b);
}
console.log (sum(10,25));
*/
const args = process.argv.slice(2);
console.log(args);
let sum = Number(args[0]) + Number(args[1]);
console.log(sum);