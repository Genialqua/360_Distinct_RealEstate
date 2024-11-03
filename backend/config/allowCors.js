const allowCors = (fn) => async (req, res, next) => {
    const allowedOrigins = [
        'https://www.360distinctrealestate.com',
        'http://localhost:4000',
        'http://localhost:3000',
        'https://360-distinct-real-estate-backend.vercel.app'
    ];

    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        // Set the header dynamically to the request's origin
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    } else {
        // Optional: Set '*' to allow all origins in development
        // res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Accept, Authorization, X-Requested-With, X-CSRF-Token, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end(); // End OPTIONS preflight requests here
    }

    // Check if `fn` is a valid function before calling it
    if (typeof fn === 'function') {
        return await fn(req, res, next); // Pass the `next` function correctly
    }

    // If `fn` is not provided, simply call `next` to proceed with the middleware chain
    next();
};

module.exports = allowCors;