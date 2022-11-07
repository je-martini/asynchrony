const promise = new Promise(
    (resolve, reject) => {
        resolve('hey!')
    }
)

const cows = 9;

const count_cows = new Promise(
    (resolve, reject) => {
        if(cows > 10 ){
            resolve(`we have ${cows} cows on the farm`);
        } else {
            reject('there is no cows on the farm')
        }
    }
);

count_cows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('finally'))
