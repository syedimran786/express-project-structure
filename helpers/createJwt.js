const jwt = require('jsonwebtoken');

let createJwt=async (data)=>
{
    let token=await jwt.sign(data, "123",{expiresIn:"2m"});
    return token
}

module.exports=createJwt