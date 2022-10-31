const sum = (num1, num2) => {
    return num1 + num2;
} ;

function calc( num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2,2, sum));

setTimeout(function (){
    console.log(`hi there`)
}, 10000);

function gretting (name) {
    console.log(`hola ${name}`);

};

setTimeout(gretting, 5000, 'Jesus')