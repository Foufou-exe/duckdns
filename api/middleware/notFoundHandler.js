

/**
 * Middleware function to handle 404 errors.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */

// Middleware for routes not found
const notFoundHandler = (req, res, next) => {
  res.status(404).send("Page not found!");
};

export default notFoundHandler;
