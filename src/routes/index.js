const {frontdeskRouter } = require('./front_desk')
const { adminRouter } = require('./admin')
const { nurseRouter} = require('./nurses')
const {doctorRouter} = require('./doctor')
const {pharmacyRouter} = require('./pharmacy')
const {labRouter} = require('./lab')
const index = (app) =>{

    app.use('/api/front_desk', frontdeskRouter)
    app.use('/api/admin', adminRouter)
    app.use('/api/nurses', nurseRouter)
    app.use('/api/doctors', doctorRouter)
    app.use('/api/pharmacy', pharmacyRouter)
    app.use('/api/lab', labRouter)
}



exports.index = index;