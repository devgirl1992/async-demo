console.log("Before");
//Promise Base
/*getUser(1)
    .then(user => getRepositories(user.gitHubUsersername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log("Commits", commits))
    .catch(err => console.log("Error", err.message)); */


//Async and Await approach

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsersername);
        const commits = await getCommits(repos[0]);
        console.log(commits)
    }
    catch(err) {
        console.log("Error", err.message);
    };

}
displayCommits();

console.log("After");


function getUser(id) {
    return new Promise((resolve, reject) =>{
        // kick off some async work
        setTimeout(()=> {
            console.log("Reading a uset from a database....");
            resolve({id: id, gitHubUsername: "lili"});
        },2000);
    });
}


function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling GitHub API....")
            resolve(["repo1", "repo2", "repo3"])
           // reject (new Error("Could not get the repos"))
        }, 2000);
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Calling Githun Commits...")
            resolve(["commit"]);
        },2000);
    })
}