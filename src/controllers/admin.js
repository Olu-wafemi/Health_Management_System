
const {adminSchema} = require('../models/admin')

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