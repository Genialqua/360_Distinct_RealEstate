const allowCors = fn => async (req, res, next) => {
    const allowedOrigins = [
        'https://www.360distinctrealestate.com',
        'https://360distinctrealestate',
        'http://localhost:4000',
        'localhost/:1',
        'localhost:4000'
    ];
    
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Accept-Version, X-Requested-With, X-CSRF-Token, Content-Length, Content-MD5, Date, X-Api-Version');
    //res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return
    }
    
    return await fn(req, res, next);
    }

  
export default allowCors;