const url = 'https://reqres.in/api/users'

function getUsers() {
    const userReq = new XMLHttpRequest();

    userReq.onreadystatechange = function() {
        if (userReq.readyState === 4 && userReq.status === 200) {
            console.log(userReq)
            let users = JSON.parse(userReq.responseText)
            users = users.data.slice(0, 5)
            console.log(users)
        }
    }
    userReq.open('GET', url);
    userReq.send();
}

function getLog() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.response))
        }
    }
    xhr.open('GET', url)
    xhr.send();
}

function getter(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.response)
        }
    }
    xhr.open('GET', url);
    xhr.send();
}

function mycallback(data) {
    console.log(data);
}


getUsers();
getLog();
getter(url, mycallback);
