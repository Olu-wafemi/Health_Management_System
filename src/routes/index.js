const {frontdeskRouter } = require('./front_desk')
const { adminRouter } = require('./admin')
const { nurseRouter} = require('./nurses')
const index = (app) =>{

    app.use('/api/front_desk', frontdeskRouter)
    app.use('/api/admin', adminRouter)
    app.use('/api/nurses', nurseRouter)
}



exports.index = index;