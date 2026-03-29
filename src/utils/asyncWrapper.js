const asyncWrapper = (handler) => {
	// Step 1: Runs during server startup when route is registered.
	// It returns middleware that Express stores and later executes per request.
	return (req, res, next) => {
		// Step 3: Executes your async route handler.
		// Step 5: If handler rejects/throws, .catch(next) forwards error to Express error flow.
		Promise.resolve(handler(req, res, next)).catch(next);
	};
};

export default asyncWrapper;
