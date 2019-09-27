console.log('Before');

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repositories => getCommits(repositories[0]))
    .then(commits => displayCommits(commits))
    .catch(err => console.log('Error', err.message));

console.log('After');

function displayCommits(commits) {
    console.log('Commits: ', commits);
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting repositories for ${username}`);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}


function getCommits(repository) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting commits for ${repository}`);
            resolve(['commit1', 'commit2', 'commit3']);
        }, 2000);
    });
}