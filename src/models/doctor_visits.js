const mongoose = require('mongoose')

const Doctor_visits = mongoose.Schema({
   card_number:{
       type: String,
       ref: 'patients'

   },
   doctor_name:{
       type: String

   },
   visit_date:{
       type: String

   },
   visit_number:{
       type: String,

       ref: 'patient_records'
   },
   status: {
       type: String,
       default: 'Unacknowledged'
   }

})


exports.Doctor_visits  = mongoose.model('doctor_visits', Doctor_visits) 