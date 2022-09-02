const {frontdeskRouter } = require('./front_desk')
const { adminRouter } = require('./admin')
const index = (app) =>{

    app.use('/api/front_desk', frontdeskRouter)
    app.use('/api/admin', adminRouter)
}



exports.index = index;