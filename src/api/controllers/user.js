const userServices = require('../services/user')
const {internalServerError} = require('../middlewares/handle_errors')

const getCurrent = async (req, res) => {

    try {
        const {id} = req.user


        const response = await userServices.getOne(id);
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

module.exports = {
    getCurrent
}