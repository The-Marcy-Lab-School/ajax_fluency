# Code Fluency: AJAX Requests w/ XHR

## Directions
1. Create an empty HTML file.
2. Create and link a JavaScript file to your `index.html` page.
3. In your JavaScript file, make an AJAX request to `"https://jsonplaceholder.typicode.com"` `/users` endpoint. **This request should log the first 5 users to the console.**
4. Create a function `getLog` that takes a URL string argument, makes a GET request to that URL, and then logs the response to the console.
5. Create a more general function, `get`, that takes two arguments, a URL and a callback function. This function should make a GET request to the URL and pass the response to the given callback function. Test this function out on `"https://jsonplaceholder.typicode.com/posts"`
