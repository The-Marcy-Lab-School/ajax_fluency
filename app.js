const apiUrl = "https://reqres.in/api/users";

function makeReq() {
	const xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const users = JSON.parse(xhr.response)
			console.log(users.data.splice(0, 4))
		}
	}

	xhr.open('GET', apiUrl)
	xhr.send();
}
makeReq()



function getLog(url) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log(JSON.parse(xhr.response))
		}
	}
	xhr.open('GET', url)
	xhr.send()
}

getLog(apiUrl)

function get(url, cb) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			cb(xhr.response) // parse if you'd like
		}
	}
	xhr.open('GET', url)
	xhr.send()
}
