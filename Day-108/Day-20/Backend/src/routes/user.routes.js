const express = require('express')

const userController = require('../controllers/user.controller')
const identifyUser = require('../middleware/auth.middleware')

const useRouter = express.Router()

/**
 * @route POST /api/users/follow/:userId
 * @description follow a user
 * @access Private
*/
useRouter.post('/follow/:username', identifyUser, userController.followUserController)


/**
 * @route POST /api/users/unfollow/:userid
 * @description Unfollow a user
 * @access Private
 */
useRouter.post("/unfollow/:username", identifyUser, userController.unfolloUserController)



module.exports = useRouter