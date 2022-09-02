const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },

    admin_type:{
        type: String
    }


    
})

exports.adminSchema = mongoose.model('admin', adminSchema) 