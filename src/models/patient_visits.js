const mongoose = require('mongoose')

const Patient_visits = mongoose.Schema({
   card_no:{
       type: String,
       ref: 'Patients'

   },

    visit_number:{
        type: Number

    },
    visit_date:{
        type: String
    },
    clinic:{
        type: String
    },
    doctor_name:{
        type: String
        
    },
    nurse_name:{
        type: String
    },

    visit_type:{
        type: String
    },
    bill_status: {
        type: String,
       
    },
    nurse_status:{
        type: String,
        default: 'Unacknowledged',
       
    },
    doctor_status:{
        type: String,
        default: 'Unacknowledged'
    },
    lab_status:{
        type: String,
        default: 'Unacknowledged'
    },
    pharmacy_status:{
        type: String,
        default: 'Unacknowledged'
    },
    doctors_prescription:[

    ],
    
})

exports.Patient_visits = mongoose.model('patient_visits', Patient_visits) 