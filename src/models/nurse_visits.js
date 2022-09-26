const mongoose = require('mongoose')

const Nurse_visits = mongoose.Schema({
   card_number:{
       type: String,
       ref: 'patients'

   },
   visit_date:{
       type: String

   },
   visit_number:{
       type: String,

       ref: 'patient_visits'
   },
   status: {
       type: 'String',
       default: 'Unacknowledged'
   }

})


exports.Nurse_visits  = mongoose.model('nurse_visits', Nurse_visits) 