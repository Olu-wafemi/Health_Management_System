const {Patient_records} = require('../models/patient_records')
const {Patient} = require('../models/patients')

const {Patient_visits} = require('../models/patient_visits')
const {Nurse_visits} = require('../models/nurse_visits')
const {Doctor_visits} = require('../models/doctor_visits')

exports.acknowledge_patient = async(req,res) =>{
    const {visit_number} = req.body
    if(!visit_number){
        return res.status(401).json({status:false, message:"Visit number is required"})
    }
    const check_visit_number = await Nurse_visits.findOne({visit_number: visit_number})
    if(!check_visit_number){
        return res.status(401).json({status: false, message:"Visit number does not exist"})
    }
    await Patient_visits.findOneAndUpdate({visit_number: visit_number}, {nurse_status: 'Acknowlegded'})
    await Nurse_visits.findOneAndUpdate({visit_number:visit_number},{status: 'Acknowlegded'})
    return res.status(200).json({status: true, message: 'Patient has been acknowlegded Successfully'})

}

exports.fetch_available_patients = async(req,res)=>{

    const available_patients = await Nurse_visits.find().where({status: 'Unacknowledged'})

    return res.status(200).json({status:true, message: 'Retrieved Successfully', data: available_patients})
}

exports.record_patient_vitals = async(req,res) =>{
    const {card_number} = req.body
    const{visit_number } = req.body
    const {visit_date} = req.body
    const {height} = req.body
    const { temperature }= req.body
    const {bmi} = req.body
    const {comments } = req.body
    const {heart_rate } = req.body
    const {weight} = req.body
    const {blood_sugar} = req.body
    
    if(!card_number){
        return res.status(401).json({status:false, 'message': 'Card number cannot be empty'})
    }
    if(!visit_number){
        return res.status(401).json({status:false, 'message': 'Visit number cannot be empty'})
    }
    const check_visit_number = await Nurse_visits.findOne({visit_number: visit_number})
    if(!check_visit_number){
        return res.status(401).json({status: false, message:"Visit number does not exist"})
    }

    const check = await Patient.findOne({card_no: card_number})
   if (!check){
       return res.status(401).json({status: false, message: "patient does not exist"})
   }

   
   const patient_vitals = await Patient_records.findOne({card_no: card_number},{
    patient_vital:{
        $elemMatch:{
            visit_number: visit_number
        }
    }
})
    if(patient_vitals.patient_vital[0].visit_number== visit_number){
        return res.status(200).json({status:false, message: "Visit number already exists in Patient's record"})
    }
    const patient = await Patient_records.findOne({card_no: card_number})

    if(patient){

       await Patient_records.findOneAndUpdate({card_no:  card_number},{
            $push:{
                patient_vital:{
                    visit_date: visit_date,
                    visit_number: visit_number,
                    height: height,
                    temperature: temperature,
                    bmi: bmi,
                    comments: comments,
                    heart_rate: heart_rate,
                    weight: weight,
                    blood_sugar: blood_sugar


                }
            }

        })
        

    }


    
    
    

    

    return res.status(200).json({status:true, message: 'Record saved Successfully',})



}

exports.create_doctor_visit = async(req,res)=>{
    const {card_number} = req.body
    const{visit_number } = req.body
    const {visit_date} = req.body
    if(!card_number){
        return res.status(401).json({status:false, 'message': 'Card number cannot be empty'})
    }
    if(!visit_number){
        return res.status(401).json({status:false, 'message': 'Visit number cannot be empty'})
    }
    if(!visit_date){
        return res.status(401).json({status:false, 'message': 'Visit date cannot be empty'})
    }

    const check = await Patient.findOne({card_no: card_number})
   if (!check){
       return res.status(401).json({status: false, message: "patient does not exist"})
   }
   const check_visit_number = await Doctor_visits.findOne({visit_number: visit_number})
   if(check_visit_number){
       return res.status(401).json({status: false, message:"Visit number already exists"})
   }
    const new_doctor_visit = new Doctor_visits({card_number: card_number,visit_date: visit_date,visit_number:visit_number, })
    
    new_doctor_visit.save()

    return res.status(200).json({status: true, message: 'Sent to Doctor Successfully', })

}