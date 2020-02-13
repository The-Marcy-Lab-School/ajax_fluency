const apiUrl = "https://reqres.in/api/users";

function makeReq() {
	const xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const data = xhr.response
			console.log(data.data.splice[0, 4])
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
			console.log(xhr.response)
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
			cb(xhr.response)
		}
	}
	xhr.open('GET', url)
	xhr.send()
}
