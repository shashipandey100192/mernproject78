const jwt = require('jsonwebtoken');
const mykey = process.env.MYSECKEY;

function verifyToken(req,res,next)
{
let token = req.headers['x-access-token'] || req.headers['authorization'];
console.log(token);

}

module.exports = verifyToken;