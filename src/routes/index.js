const {frontdeskRouter } = require('./front_desk')
const { adminRouter } = require('./admin')
const { nurseRouter} = require('./nurses')
const {doctorRouter} = require('./doctor')
const {pharmacyRouter} = require('./pharmacy')
const index = (app) =>{

    app.use('/api/front_desk', frontdeskRouter)
    app.use('/api/admin', adminRouter)
    app.use('/api/nurses', nurseRouter)
    app.use('/api/doctors', doctorRouter)
    app.use('/api/pharmacy', pharmacyRouter)
}



exports.index = index;