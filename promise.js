
const p = new Promise((reslove, reject) => {
    //Async work
    setTimeout(() => {
        // reslove(1);
        reject(new Error('message'));
    }, 2000)
});

p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Result', err.message));