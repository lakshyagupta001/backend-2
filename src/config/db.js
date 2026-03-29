import mongoose from "mongoose";
import config from "./env.js";
import AppError from "../utils/appError.js";

//using try and catch with async await
const connectDB = async () => {
    try {//one can also not write try block and just write await mongoose.connect(config.MONGODB_URI) and it will work,
        //if there is an error in connecting to the database, it will go to the catch block and log the error message.

        await mongoose.connect(config.MONGODB_URI);
        console.log("MongoDB connected successfully 🚀");
    } catch (error) {
        AppError("MongoDB connection error:", error);
        process.exit(1);
    }
};


//using then and catch with promises
// const connectDB = () => {
//     mongoose.connect(config.MONGODB_URI)
//         .then(() => console.log("MongoDB connected successfully 🚀")
//         .catch((error) => {
//             console.error("MongoDB connection error:", error);
//             process.exit(1);
//         });
// };

export default connectDB;

//explaination of async await and try catch with example
// async function fetchData() {
//     try {
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

//async function always gives us a promise, and we can use await to wait for the promise to resolve or reject.
// In this example, the fetchData function is an asynchronous function that uses async/await to handle asynchronous operations. 
// The try block contains the code that may throw an error, such as fetching data from an API. 
// If any error occurs during the execution of the code in the try block,
// it will be caught by the catch block, 
// and the error message will be logged to the console.



//explaination of then and catch with example
// function fetchData() {
//     fetch('https://api.example.com/data')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error fetching data:', error));
// }

// In this example, the fetchData function uses the then and catch methods to handle asynchronous operations.
// The fetch function returns a promise, and we use then to handle the resolved value of the promise (the response).
// We then chain another then to parse the response as JSON and log the data to the console.
// If any error occurs during the fetch operation or while parsing the response, it will be caught by the catch method, 
// and the error message will be logged to the console.