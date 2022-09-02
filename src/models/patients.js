const mongoose = require('mongoose')

const Patient = mongoose.Schema({
    card_no:{
        type: String

    },
    
    member_id:{
        type: String

    },

    pa_code:{
        type: String
    },
    employer:{
        type:String
    },
    surname:{
        type: String

    },
    sex:{
        type:String

    },
    
    genotype:{
        type:String

    },
    birth_weight:{
        type:String

    },
    fathers_name:{
        type:String

    },
    mothers_name:{
        type:String
    },
    principal_number:{
        type:String
    },
    rx_guide:{
        type:String

    },
    plan_type:{
        type:String
    },
    eligibility_code:{
        type:String
    },
    dependant_code:{
        type:String
    },
    group_number:{
        type:String
    },
    other_name:{
        type:String
    },
    age:{
        type:Number

    },
    religion:{
        type:String

    },
    occupation:{
        type:String
    },
    blood_group:{
        type: String
    },
    birth_time:{
        type:String
    },
    fathers_phone:{
        type:Number
    },
    mothers_phone:{
        type:Number
    },






    name:{
        type: String
    },
    
    patient_type:{
        type: String

    },
 

    date_of_birth:{
        type: String
    },
    marital_status:{
        type: String
    },
  
   
   
   

    

})

exports.Patient = mongoose.model('Patient', Patient)