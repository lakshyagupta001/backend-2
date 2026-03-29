import express from 'express';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandling.js';
import router from './routes/test.route.js';
const app = express();
app.use(express.json());//is a middleware in Express.js 
// that parses incoming JSON data from the request body.
//eg: if we send a POST request with JSON data, this middleware will automatically parse 
// it and make it available in req.body for our route handlers to use.


app.use(morgan('dev'));//is a middleware in Express.js that logs HTTP requests and responses to the console.
// It provides detailed information about each request, such as the HTTP method, URL, status code, response time, and more.
// This can be helpful for debugging and monitoring the performance of your application.

//we can also create logger.js file and use it here instead of morgan for our custom logging needs.

app.use(router);

//this method is not recomanded one should create a separate file for routes 
// and use it here instead of defining routes directly in app.js
// POST GET PUT DELETE etc are the HTTP methods that we can use to define our routes in Express.js
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


app.use(errorHandler);//is a middleware function that handles errors in an Express.js application.
// It is typically defined at the end of the middleware stack and is responsible for catching any errors that occur during the request-response cycle.
// When an error is thrown or passed to the next() function, this middleware will be invoked, allowing you to handle the error gracefully and send an appropriate response to the client.


export default app;