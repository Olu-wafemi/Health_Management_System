const jwt = require('jsonwebtoken')

module.exports = (req,res,next) =>{
    const authHeader = req.get("Authorization")
    //console.log(authHeader )
    if(!authHeader){
        return res.status(401).json({staus: false, message: 'Not Authenticated'})
    }
    const token = authHeader.split(' ')[1];
    let decodedToken
    try{
        decodedToken  = jwt.verify(token,'secret')

    } catch (err){
        return res.status(502).json({staus: false, message: 'Invalid token'})
    } 
    //if the token was not verified
    if (!decodedToken) {
        return res.status(401).json({staus: false, message: 'Not Authenticated'})
    }
    req.userId = decodedToken.userId;
    next()
}