const {Pharmacy_visits } = require('../models/pharmacy_visits')
 
exports.acknowledge_patient = async(req,res)=>{
    
    const {visit_number} = req.body
    if(!visit_number){
        return res.status(401).json({status:false, 'message': 'Visit number cannot be empty'})
    }

    const check = await Pharmacy_visits.findOne({visit_number:visit_number})

    if(check){
        await check.update({status: 'Acknowledged'})
        return res.status(200).json({status: true, message: 'Updated Succesfully'})
    }

    if(!check){
        return res.status(200).json({status:false, message: 'Invalid visit number'})

    }


     
}

exports.fetch_patients = async(req,res) =>{
   

    const Pharmacy = await Pharmacy_visits.find().where({status: 'Unacknowledged'})
    
    return res.status(200).json({status:true, message:'Retrieved Successfully',data: {  Pharmacy}})
}
exports.fetch_patients_prescription = async(req,res)=>{
    const {visit_number} = req.body
    if(!visit_number){
        return res.status(401).json({status:false, 'message': 'Visit number cannot be empty'})
    }
    const check_visit_number = await Pharmacy_visits.findOne({visit_number: visit_number})
    if(!check_visit_number){
        return res.status(401).json({status: false, message:"Visit number does not exist"})
    }
    const patient_prescription = await Pharmacy_visits.findOne({visit_number:visit_number})
    return res.status(200).json({status:true, message:'Retrieved Successfully',data: patient_prescription.prescription})
}
