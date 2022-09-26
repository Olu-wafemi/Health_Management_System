const {Patient} = require('../models/patients')
const {Bills} = require('../models/bills')
const {Patient_visits} = require('../models/patient_visits')
const {Patient_records} = require('../models/patient_records')
const {Nurse_visits} = require('../models/nurse_visits')

exports.registerpatient = async(req,res)=>{
    
    const {card_no} =  req.body
    const {member_id} = req.body
    const {pa_code}  = req.body
    const {employer} = req.body
    const {surname} = req.body
    const {sex} = req.body
    const {genotype} = req.body
    const {birth_weight} = req.body
    const {fathers_name}= req.body
    const {mothers_name}= req.body
    const {principal_number} = req.body
    const {rx_guide} = req.body
    const {plan_type} = req.body
    const {eligibility_code} = req.body
    const {dependant_code} = req.body
    const {group_number} = req.body
    const {other_name} = req.body
   
    const {religion} = req.body
    const {occupation} = req.body
    const {blood_group} = req.body
    const {birth_time} = req.body
    const {fathers_phone} = req.body

    const {mothers_phone}= req.body
    const {name}= req.body
    const {patient_type} = req.body
    
    const {date_of_birth} = req.body
    const {marital_status} = req.body
    const {age} = req.body
    
    
    if(!card_no){
        return res.status(401).json({status:false, 'message': 'Card number cannot be empty'})
    }
    if(!name){
        return res.status(401).json({status:false, 'message': 'Name field is required'})
    }
    try{
        const check = await Patient.findOne({card_no:card_no })
        if(check){
            return res.status(401).json({status:false, 'message': 'Card number already exists'})
        }
        const new_patient = new Patient({
            card_no: card_no, member_id: member_id, pa_code:pa_code,
            employer:employer,
            surname: surname, sex:sex,genotype:genotype,birth_weight: birth_weight,fathers_name: fathers_name,
            mothers_name: mothers_name,principal_number:principal_number,rx_guide:rx_guide,
            plan_type:plan_type,eligibility_code:eligibility_code,
            dependant_code:dependant_code,
            group_number:group_number,other_name:other_name,age:age,
            religion:religion,occupation:occupation,blood_group:blood_group,
            birth_time:birth_time,fathers_phone:fathers_phone,mothers_phone:mothers_phone,
            name:name,patient_type:patient_type,date_of_birth:date_of_birth,marital_status:marital_status,age:age,
            




        })

        const new_record = new Patient_records({
            card_no: card_no

        })
        new_record.save()

        new_patient.save()

    
        return res.status(200).json({status: true, message: 'Patient registered Successfully', data: new_patient})
        

    }
    catch{

    }



}

exports.searchpatient = async(req,res) =>{

    const {card_no} = req.body

    const patient = await Patient.findOne({card_no: card_no})
    if(!card_no){
        return res.status(401).json({status:false, 'message': 'Card number cannot be empty'})
    }
    if (patient){
        return res.status(200).json({status: true, message: 'Retrieved Successfully', patient})

    }
    if(!patient){
        return res.status(401).json({status: false, message: 'Patient does not exist',})

    }

   




}

exports.createbill = async(req,res)=>{

    const {amount} = req.body
    const {bill_id} = req.body
    
    const {payment_type} = req.body
    const {reason} = req.body
    const {card_no} = req.body
   const check = await Patient.findOne({card_no: card_no})
   if (!check){
       return res.status(401).json({status: false, message: "patient does not exist"})
   }
    try{
    const check_bill_id = await Bills.findOne({bill_id: bill_id})
    if(check_bill_id){
        return res.status(401).json({status: false, message: "Bill Id already exists"})
    }
    const new_bill = new Bills({amount: amount,card_no : card_no, reason: reason, bill_id: bill_id,})

    new_bill.save()
    const new_bill_record = await Patient_records.findOne({card_no: card_no})
    if (new_bill_record){
        await new_bill_record.updateOne({card_no: card_no},{
            $push:{
                bills:{
                    amount: amount,
                    reason: reason,
                    bill_id: bill_id,
                    


                    


                }
            }
        })
    }

    new_bill_record.save()
    return res.status(200).json({status: true, message: 'Bill created Successfully'})
    }
    catch{

    }
}

exports.check_outstanding_bills = async(req,res)=>{

}

exports.fetch_all_patients = async(req,res)=>{
    const patients = await Patient.find()

    return res.status(200).json({status: true,'message': 'Retrived Successfully', data: patients})

}
exports.create_visit = async(req,res) =>{
    const {card_no} = req.body
    const {clinic } = req.body
    const {nurse_name} = req.body
    const {visit_type} = req.body
    const {bill_status} = req.body
    const {visit_date} = req.body 
    const {visit_number} = req.body


    if(!card_no){
        return res.status(401).json({status:false, 'message': 'Card number cannot be empty'})
    }
    if(!visit_number){
        return res.status(401).json({status:false, 'message': 'Visit number cannot be empty'})
    }
    if(!visit_date){
        return res.status(401).json({status:false, 'message': 'Visit date cannot be empty'})
    }


    const check = await Patient.findOne({card_no: card_no})
   if (!check){
       return res.status(401).json({status: false, message: "patient does not exist"})
   }

    const check_visit_number = await Nurse_visits.findOne({visit_number: visit_number})
    if(check_visit_number){
        return res.status(401).json({status: false, message:"Visit number already exists"})
    }

    const new_visit =  new Patient_visits({card_no: card_no, clinic:clinic,
        nurse_name:nurse_name,
        visit_type:visit_type,
        bill_status:bill_status,
        visit_date:visit_date,
        visit_number: visit_number})
    new_visit.save()
    
    const nurse_visits = new Nurse_visits({card_number:card_no,visit_date:visit_date, visit_number: visit_number})
    nurse_visits.save()

    return res.status(200).json({status: true,message: 'Patient has been sent to Nurse Successfully'})
}
