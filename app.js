// console.log("JavaScript is conneted")

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status == 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  };
  
  xhr.open("GET", "https://reqres.in/api/users", true);
  xhr.send();




const getLog = (url) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    
    xhr.open("GET", url, true);
    xhr.send();
}

getLog("https://reqres.in/api/users")



const get = (url, callback) => {
    const xml = new XMLHttpRequest();
    
    xml.onreadystatechange = function() {
        if (xml.readyState === 4 && xml.status == 200) {
            callback(xml.responseText); 
            // console.log(JSON.parse(xml.responseText))
        }
    }

    xml.open("GET", url, true);
    xml.send();
}

get(`"https://jsonplaceholder.typicode.com/posts"`, testFunction())


function testFunction() {
    
}

// ## Directions
// 1. Create an empty HTML file.
// 2. Create and link a JavaScript file to your `index.html` page.
// 3. In your JavaScript file, make an AJAX request to `"https://jsonplaceholder.typicode.com"` `/users` endpoint. **This request should log the first 5 users to the console.**
// 4. Create a function `getLog` that takes a URL string argument, makes a GET request to that URL, and then logs the response to the console.
// 5. Create a more general function, `get`, that takes two arguments, a URL and a callback function. This function should make a GET request to the URL and pass the response to the given callback function. Test this function out on `"https://jsonplaceholder.typicode.com/posts"`
