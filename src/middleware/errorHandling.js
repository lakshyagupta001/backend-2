//create error handling middleware to catch and handle errors in the application
import AppError from '../utils/appError.js';

const errorHandler = (err, req, res, next) => {
    // Step 6: Express skips normal middleware and comes here after next(err).
    // Logs full stack trace in terminal for debugging
    console.error(err.stack);

    // Step 7: Checks if error is trusted custom AppError
    //instanceof is used to check if err is an instance of the AppError class.
    //likw same object created by the AppError class or any of its subclasses.
    if (err instanceof AppError) {
        // Sends controlled error response to client
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        // Unknown/unexpected error: hide internal details for security
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
};

export default errorHandler;
