async function notifyCustomer() {
    try {
        const customer = await getCustomer(1);
        console.log("Customer", customer);
        if (customer.isGold) {
            const movies = await getTopMovie();
            console.log("Top Movies: ", movies);
            await sendEmail(customer.email, movies);
            console.log('Email sent...');

        }
    }
        catch(err){
            console.log("Erroe", err.message);
        };

}

notifyCustomer();


function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 1, name: "Lili", isGold: true, email: "amail@gmail.com"})
        }, 2000)
    });
}


function getTopMovie(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Movie1", "Movie2", "Movie3"])
        }, 2000)
    })
}

function sendEmail(email, movies){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve()
        }, 2000)
    })
}



