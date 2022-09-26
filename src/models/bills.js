const mongoose = require('mongoose')

const Bills = mongoose.Schema({
    amount:{
        type: Number
    },
    card_number:{
        type: String

    },
    bill_id:{
        type:String
    },


    
    reason:{
        type: String

    },
    status:{
        type:String,
        default: 'Unsettled'


    },
    payment_method:{
        type: String

    }


    
})
exports.Bills = mongoose.model('Bills', Bills)
