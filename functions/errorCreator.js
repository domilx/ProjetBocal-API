module.exports = (statusCode, message, next) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    next(error);
}