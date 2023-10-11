const user = require('./user')
const auth = require('./auth')
const {notFound} = require('../middlewares/handle_errors')

const initRoutes = (app) => {
    app.use('/api/auth', auth)
    app.use('/api/user', user)

    return app.use('/', (notFound))

}

module.exports = initRoutes;