const f_async = () => {
    return new Promise((resolve, reject) => {
        (true)
         ? setTimeout(() => resolve('Async!!'), 2000)
         : reject( new Error('Error!'));
    });
}

const anothe_f = async () => {
    const something = await f_async();
    console.log(something);
    console.log('hello!');
}

console.log('before');
anothe_f();
console.log('afther');