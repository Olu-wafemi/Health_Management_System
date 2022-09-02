const mongoose = require('mongoose')

const Doctor_visits = mongoose.Schema({
   reg_number:{
       type: String,
       ref: 'patients'

   },
   visit_date:{
       type: Date

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