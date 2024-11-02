const allowCors = fn => async (req, res, next) => {
    const allowedOrigins = [
        'https://www.360distinctrealestate.com',
        'http://localhost:4000',
        'http://localhost:3000' // Add all required origins
    ];

    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Accept, Authorization, X-Requested-With, X-CSRF-Token, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end(); // End OPTIONS preflight requests here
    } 
    return await fn(req, res, next); // Pass the `next` function correctly
    
};

module.exports = allowCors;