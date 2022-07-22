import { Router } from 'express'
import * as usersController from '../controllers/usersController.js'

const usersRouter = Router()

usersRouter.get('/', usersController.get)
usersRouter.post('/', usersController.post)

export default usersRouter 