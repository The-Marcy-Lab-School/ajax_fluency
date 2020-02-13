const xhr = new XMLHttpRequest();
const url = 'https://reqres.in/api/users';

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.open('GET', url);
xhr.send();

function getLog(url) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('Wait...');
      console.log(JSON.parse(xhr.response));
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

function get(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.response);
    }
  };

  xhr.open('GET', url);
  xhr.send();
}
