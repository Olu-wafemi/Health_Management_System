const mongoose = require('mongoose')

const Lab_visits = mongoose.Schema({
   reg_number:{
       type: String,
       ref: 'patients'

   },
   visit_date:{
       type: Date

   },
   visit_number:{
       type: String,

       ref: 'patient_visits'
   },
   test_details:[{
       test_name:{type: String},


   }],
   status:{
       type: String,
       default: 'Unacknowledged'
   }

})


exports.Lab_visits  = mongoose.model('lab_visits', Lab_visits) 