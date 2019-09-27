console.log('Before');
getUser(1, processUser);
console.log('After');

function processUser(user) {
    console.log('User: ', user);
    //Get the repositories
    getRepositories(user.gitHubUsername, processRepository);
}

function processRepository(repositories) {
    console.log('Repositories: ', repositories);
    //Get commits
    getCommits(repositories[0], displayCommits);
}

function displayCommits(commits) {
    console.log('Commits: ', commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log(`Getting repositories for ${username}`);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repository, callback) {
    setTimeout(() => {
        console.log(`Getting commits for ${repository}`);
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}