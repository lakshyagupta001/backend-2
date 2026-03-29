//give me a route for testing the error handling flow in the project
import express from 'express';
import asyncWrapper from '../utils/asyncWrapper.js';
import AppError from '../utils/appError.js';
const router = express.Router();
//use asyncWrapper to wrap the route handler and catch any errors that may occur during the execution of the handler.
// Step 2: Client hits GET /test-error, then Express executes wrapper middleware.
router.get('/test-error', asyncWrapper(async (req, res, next) => {
    // Simulate an error
    // Step 4: Throwing inside async function becomes Promise rejection.
    throw new AppError("This is a test error", 400);
}));

export default router;