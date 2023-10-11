const db = require('../models')


const getOne = async (userId) => {
    try {
        const response = await db.User.findOne({
            where: {id: userId},
            attributes: {
                exclude: ['password' , 'role_code' , 'createdAt', 'updatedAt']
            },
            include: [{model: db.Role , as:'roleData', attributes: ['id', 'code' ,'value']}]
        })


        return {
            errors: response ? 0 : 1,
            messages: response ? "Got" : "User not found",
            userData: response
        }
    } catch (error) {
        return error
    }
}


module.exports = {
    getOne,
}