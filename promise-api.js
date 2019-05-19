const proms1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Async operation 1...")
    }, 3000)
});

const proms2 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async operation 2...");
        resolve(2)
    },2000)
});


//Promise.all([proms1, proms2])
//.then(result => console.log(result));

Promise.race([proms1, proms2])
.then(result => console.log(result));