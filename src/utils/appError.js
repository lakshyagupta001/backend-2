//create a custom error class to handle application-specific errors
class AppError extends Error {
    constructor(message, statusCode) {
        // Calls Error constructor and sets this.message=message
        super(message);

        // Stores HTTP status code like 400, 404, 500
        this.statusCode = statusCode;

        // 4xx -> fail (client-side), 5xx -> error (server-side)
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

        // Marks this as an expected/operational error (not a coding bug)
        this.isOperational = true; // To distinguish between operational errors and programming errors

        // Cleans stack trace by removing constructor call noise
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;