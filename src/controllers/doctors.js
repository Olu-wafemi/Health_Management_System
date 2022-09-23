const {Doctor_visits} = require('../models/doctor_visits')
const {Patient_records} = require('../models/patient_records')
const {Bills} = require('../models/bills')
const {Pharmacy_visits} = require('../models/pharmacy_visits')
const {Lab_visits } = require('../models/lab_visits')
exports.acknowledge_patient = async(req,res)=>{
    const {visit_number} = req.body
    const {doctor_name} = req.body


    const acknowlegded = await Doctor_visits.findOneAndUpdate({visit_number: visit_number},{status: 'Acknowledged', doctor_name:doctor_name})

    return res.status(200).json({status: true, message: 'Patient acknowledged Successfully'})



}

exports.fetch_available_patients =  async (req,res)=>{


    const available_patients = await Doctor_visits.find().where  ({status: 'Unacknowledged'})

    return res.status(200).json({status:true, message: 'Retrieved Successfully', data: available_patients})


}

exports.get_patient_vitals = async(req,res)=>{
    const {card_number} = req.body
    const {visit_number} = req.body
    const patient_vitals = await Patient_records.findOne({card_no: card_number},{
        patient_vital:{
            $elemMatch:{
                visit_number: visit_number
            }
        }
    })

    return res.status(200).json({status :true, message: 'Retrieved Successfully', data: patient_vitals })


}
exports.fetch_test_result = async(req,res) =>{
    const {visit_number} = req.body

    



}

exports.add_medication = async(req,res) =>{
    const {card_number} = req.body
    const {visit_number,visit_date} = req.body
    const {medicine_name}= req.body
    const {usage_type} = req.body
    const {morning} = req.body
    const {afternoon, night, days,quantity, notes} = req.body
    const {doctor_name, doctor_id} = req.body 
    const patient = await Patient_records.findOne({card_number: card_number})

    if (patient){
         await Patient_records.findOneAndUpdate({card_no:card_number},{

            $push:{
                doctors_prescription:{
            visit_date:visit_date,
            visit_number: visit_number,
            doctor_name: doctor_name,
            doctor_id: doctor_id
                ,
             
                drug:{
                
                
                medicine_name:medicine_name,
                usage_type: usage_type,
                morning: morning,
                afternoon: afternoon,
                night: night,
                days: days,
                quantity: quantity,
                notes: notes
                }
    
            }
        }
            }


            )

    }

    return res.status(200).json({status:true, message: 'Successful'})
}

exports.create_bill = async(req,res) =>{
    const {bill_details} = req.body
    const {reg_number} = req.body
    const {visit_number} = req.body
    const {reason} = req.body

    const create_bill = new Bills({bill_details:bill_details, reason: reason, reg_number: reg_number,visit_number:visit_number})
    create_bill.save()

    return res.json({status: true, message: 'Bill created Successfully'})


}

exports.send_to_pharmacy = async(req,res) =>{

    const {visit_number} = req.body
    const {card_number} = req.body
    const {visit_date} = req.body
    const {doctor_name}  = req.body
    const {doctors_prescription} = req.body
    const new_pharmacy = new Pharmacy_visits({visit_number: visit_number, card_number: card_number,visit_date: visit_date,doctor_name: doctor_name})
    for(let i= 0; i < doctors_prescription.length; i++){
        new_pharmacy.prescription.push({
            medicine_name: doctors_prescription[i]['medicine_name'],
            usage_type: doctors_prescription[i]['usage_type'],
            morning: doctors_prescription[i]['morning'],
            afternoon: doctors_prescription[i]['afternoon'],
            night: doctors_prescription[i]['night'],
            days: doctors_prescription[i]['days'],
            quantity: doctors_prescription[i]['quantity'],
            notes: doctors_prescription[i]['notes']
        })

    }
    
    new_pharmacy.save()

    return res.status(200).json({status: true, message: "Sent to Pharmacy Successfully"})

}


exports.send_to_lab = async(req, res)=>{
    const {card_number} = req.body
    const {visit_date} = req.body
    const {visit_number} = req.body
    const {test_name} = req.body
    

    const conduct_test = new Lab_visits({card_number: card_number, visit_date:visit_date,visit_number:visit_number,
        
            test_name: test_name
    })
    conduct_test.save()
    

    return res.status(200).json({status:true, message: 'Sent Successfully'})


}