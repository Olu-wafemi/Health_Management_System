const { Lab_visits} = require('../models/lab_visits')
const { Patient_records } = require('../models/patient_records')


exports.fetch_patients = async(req,res) =>{
    const {visit_date} = req.body

    const Lab =await Lab_visits.find().where  ({status: 'Unacknowledged'})

    return res.status(200).json({status:true, message:'Retrieved Successfully',data: Lab})

}

 
exports.acknowledge_patient = async(req,res)=>{
    
    const {visit_number} = req.body

    const check = await Lab_visits.findOne({visit_number:visit_number})

    if(check){
        await check.update({status: 'Acknowledged'})
        return res.status(200).json({status: true, message: 'Updated Succesfully'})
    }

    if(!check){
        return res.status(200).jsom({status:false, message: 'Invalid visit number'})

    }


     
}
exports.create_pathology = async(req,res)=>{
    const {visit_number} = req.body
    const {card_number} = req.body
    const {test_name} = req.body
    const {short_name} = req.body
    const {test_type} = req.body
    const {category_name} = req.body
    const {method} = req.body
    const {report_days} = req.body
    const {test_parameter_name} = req.body

    const add_pathology = await Patient_records.findOne({card_no: card_number})
    if (add_pathology){

        await Patient_records.findOneAndUpdate({card_no: card_number},{
            $push:{
              pathology:  {

                
                visit_number: visit_number,
                card_number: card_number,
                test_name: test_name,
                short_name:short_name,
                test_type: test_type,
                category_name:category_name,
                method: method, 
                report_days: report_days,
                
                test_parameter_name: test_parameter_name
            }
        }
        })

        return res.status(200).json({status: true, message: 'Created Successfully'})

    }

    if(!add_pathology){
        return res.status(404).json({status:false, message: 'Invalid card number'})
    }
}



exports.record_result = async(req,res)=>{
    const {visit_number} = req.body
    const {reg_number} = req.body







}

