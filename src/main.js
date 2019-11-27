

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


const umPorSegundo = async () => {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
  
}

umPorSegundo();





/*const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
});

const execPromisse = async () => {

    console.log( await minhaPromisse());
    console.log( await minhaPromisse());
    console.log( await minhaPromisse());
    console.log( await minhaPromisse());
    console.log( await minhaPromisse());
}

execPromisse();



function base(x){
    return function produto(y){
        return x * y;
    }
}

var f = base(2);
var g = base(-1);

function funX(n) {
    if (n == 1) {
        return (n);
    }
    return ((n - 1) * funX(n - 1));
}

console.log(funX(6));

console.log(f(3) + g(-1));
*/