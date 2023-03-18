import express from 'express'
import authController from './../controllers/auth.controller'

const router = express.Router()

router.route('/api/auth/signin')
  .post(authController.signIn)

router.route('/api/auth/signout')
  .get(authController.signOut)

export default router