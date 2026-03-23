module.exports = (error, req, res, next) => {
    console.error(" [ERROR LOG]:", {
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
    });

    const statusCode = error.statusCode || 500

    const message = statusCode === 500
        ? "Ocorreu um erro. Tente novamente mais tarde"
        : error.message

    const typeError = error.typeError || "internalError"

    res.status(statusCode).json({ message, typeError });
};
