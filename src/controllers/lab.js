const { Lab_visits} = require('../models/lab_visits')


exports.fetch_patients = async(req,res) =>{
    const {visit_date} = req.body

    const Lab = Lab_visits.find().filter({visit_date:visit_date}).filter({status: 'Unacknowledged'})

    return res.status(200).json({status:true, message:'Retrieved Successfully',data: Lab})

}

 
exports.acknowledge_patient = async(req,res)=>{
    
    const {visit_number} = req.body

    const check = await Lab_visits.findOne({visit_number})

    if(check){
        check.update({status: 'Acknowledged'})
        return res.status(200).json({status: true, message: 'Updated Succesfully'})
    }

    if(!check){
        return res.status(200).jsom({status:false, message: 'Invalid visit number'})

    }


     
}

exports.record_result = async(req,res)=>{
    const {visit_number} = req.body
    const {reg_number} = req.body







}

