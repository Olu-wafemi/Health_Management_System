const mongoose = require('mongoose')

const Pharmacy_visits = mongoose.Schema({
   reg_number:{
       type: String,
       ref: 'patients'

   },
   visit_date:{
       type: Date

   },
   doctor_id:{
       type: String
   },
   visit_number:{
       type: String,

       ref: 'patient_visits'
   },
   status: {
       type: String,
       default: 'Unacknowledged'
   },
   doctor_name:{
       type: String
   },
   
   prescription:[{
    medicine_name:{type:String},
    usage_type:{type:String},
    morning:{type:Boolean},
    afternoon:{type:Boolean},
    night:{type:Boolean},
    days:{type:Number},
    quantity:{type:Number},
    notes:{type:String}


   }

   ]
       

   

})


exports.Pharmacy_visits  = mongoose.model('doctor_visits', Pharmacy_visits) 