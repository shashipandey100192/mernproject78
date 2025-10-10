const jwt = require('jsonwebtoken');
const mykey = "mernfullstack";

function verifyToken(req, res, next) {
    // let token = req.headers['x-access-token'] || req.headers['authorization'];
    const token = req.headers["authorization"] || req.get("Authorization");
    console.log(`mytoken:${token}`);

    if (!token) {
        return res.status(403).send('Token is required');
    }

    if (token.startsWith('Bearer ')) {
        token = token.split(' ')[1];
    }
    if (token.startsWith('Bearer ')) {
    token = token.split(' ')[1];
  }

  try {
    const decoded = jwt.verify(token, mykey);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT verify error:', err.name, err.message);
      res.status(420).json({message:"selected data removed",status:421});
  }

}

module.exports = verifyToken;



