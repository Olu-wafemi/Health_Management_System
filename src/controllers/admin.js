
const {adminSchema} = require('../models/admin')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
exports.registerAdmin = async(req,res)=>{

    const {username} = req.body
    const {password} = req.body
    const {admin_type}= req.body

    const hashed_password = await bcrypt.hash(password,12)

    const new_admin = new adminSchema({username: username, password: hashed_password, admin_type: admin_type})
    new_admin.save()

    return res.status(200).json({status: true, message: 'Admin registered Successfully'})
}
exports.loginAdmin = async(req,res)=>{

    const {username} = req.body
    const {password} = req.body

    const check = await adminSchema.findOne({username: username})
    if(check){
        const decryptpassword = await bcrypt.compare(password, check.password)
        if (decryptpassword){

            const token = jwt.sign({username: check.username,
                userId: check._id.toString()}, 'secret', { expiresIn: '4h' })
            return res.status(200).json({status: true,  message: 'Signin Successful', token: token, data: check})
        }
        return res.status(401).json({status: false, message: 'Invalid password'})
    }

    if(!check){
        return res.status(401).json({status: false, message: 'Invalid Username'})
    }
}