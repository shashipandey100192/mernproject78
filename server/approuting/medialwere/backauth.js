const jwt = require('jsonwebtoken');
const mykey = "mernfullstack";

 async function verifyToken(req, res, next) {
    let token = req.headers.authorization;
    // const token = await req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    console.log(`mytoken:${token}`);

    if (!token) {
        return res.status(401).send('Token is requiredeeeeeeeeeeee');
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



