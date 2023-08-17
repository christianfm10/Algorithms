//import chalk from "chalk"
const iterative_method = () => {
    let a = 0;
    let b = 10;
    for (let n = 10; a < b; n++) {
        a = 2 ** (n/8);
        b = n;
        console.log(a, b, n);
    }
}
iterative_method()