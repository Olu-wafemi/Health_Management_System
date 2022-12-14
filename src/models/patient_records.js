const mongoose = require('mongoose')

const Patient_records = mongoose.Schema({
   card_no:{
       type: String,
       ref: 'patients'

   },

   patient_vital:[{
       visit_date: {type:String},
       visit_number:{
        type: String,  ref: 'patient_visits'},
        height:{ type: String},
        temperature:{type: String },
        bmi:{type: String},
        comments:{type: String},
        heart_rate:{ type: String},
        weight:{type: Number },
        blood_sugar:{type: Number},
        _id: false
        
    }],
    

    complaints:[{
        visit_date:{type: String},
        visit_number:{type: String},
        complaints: [{type: String}],
        _id: false

    }],
    doctors_prescription:[{
        visit_date:{type: String},
        visit_number:{type: String},
        doctor_name:{type: String},
        doctor_id:{type: String},
        drug:[{
            
            medicine_name:{type:String},
            usage_type:{type:String},
            morning:{type:Boolean},
            afternoon:{type:Boolean},
            night:{type:Boolean},
            days:{type:Number},
            quantity:{type:Number},
            notes:{type:String},
            _id: false
        }],
        _id: false
    
    }],

    pathology:[{
        visit_number: {type: String},
        test_name: {type: String},
        short_name:{type:String},
        test_type:{type:String},
        category_name:{type:String},
        method:{type:String},
        report_days:{type:String},
        test_parameter_name:{type:String},
        test_id:{type: String},
        _id: false

    }],

    bills:[{
        amount:{
            type: Number
        },

       
        reason:{
            type: String
    
        },
        bill_id:{
            type: String

        },

        status:{
            type:String,
            default: 'Unsettled'
    
    
        },
        payment_method:{
            type: String
    
        }
    }]




   
   
 
  
   
   
   
 
  

})


exports.Patient_records= mongoose.model('patient_records', Patient_records) 

