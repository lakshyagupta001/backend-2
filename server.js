import app from './src/app.js';
import connectDB from './src/config/db.js';

(async () => {
    await connectDB();
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})();//it is having 2 parameters, the first one is the port number on which the server will listen for incoming requests, 
// and the second one is a callback function that will be executed once the server starts successfully.