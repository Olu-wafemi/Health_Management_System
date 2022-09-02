const {Patient} = require('../models/patients')
const {Bills} = require('../models/bills')
const {Patient_visits} = require('../models/patient_visits')

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
    
    


    try{
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

        new_patient.save()
        return res.status(200).json({status: true, message: 'Patient registered Successfully'})
        

    }
    catch{

    }



}

exports.searchpatient = async(req,res) =>{

    const {card_no} = req.body
    const patient = await Patient.findOne({card_no: card_no})

    if (patient){
        return res.status(200).json({status: true, message: 'Retrieved Successfully', patient})

    }
    if(!patient){
        return res.status(401).json({status: false, message: 'Patient does not exist',})

    }

   




}

exports.createbill = async(req,res)=>{

    const {amount} = req.body
    
    const {payment_type} = req.body
    const {reason} = rea.body
    const {card_no} = req.body
  
    try{

    const new_bill = new Bills({amount: amount,card_no : card_no, reason: reason, payment_method: payment_type})

    new_bill.save()

    return res.status(200).json({status: true, message: 'Bill created Successfully'})
    }
    catch{

    }
}



exports.create_visit = async(req,res) =>{
    const {card_no} = req.body
    const {clinic } = req.body
    const {nurse_name} = req.body
    const {visit_type} = req.body
    const {bill_status} = req.body
    const {visit_date} = req.body 
    const {visit_number} = req.body


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
