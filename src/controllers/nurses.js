const {Patient_records} = require('../models/patient_records')

const {Patient_visits} = require('../models/patient_visits')
const {Nurse_visits} = require('../models/nurse_visits')
const {Doctor_visits} = require('../models/doctor_visits')

exports.acknowledge_patient = async(req,res) =>{
    const {visit_number} = req.body

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

    const patient = await Patient_records.findOne({card_no: card_number})

    if(patient){

        patient.updateOne({card_no:  card_number},{
            $push:{
                patient_vital:{
                    visit_date: visit_date,
                    vist_number: visit_number,
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
    const new_patient_vital = new Patient_records({card_no:card_number, 
        
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
        
        
    })

    new_patient_vital.save()

    
    
    

    

    return res.status(200).json({status:true, message: 'Record saved Successfully',})



}

exports.create_doctor_visit = async(req,res)=>{
    const {card_number} = req.body
    const{visit_number } = req.body
    const {visit_date} = req.body

    const new_doctor_visit = new Doctor_visits({card_number: card_number,visit_date: visit_date,visit_number:visit_number, })
    
    new_doctor_visit.save()

    return res.status(200).json({status: true, message: 'Sent to Doctor Successfully', })

}