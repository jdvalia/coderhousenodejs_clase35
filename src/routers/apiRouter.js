import { Router, json } from 'express'
import usersRouter from './usersRouter.js'
import zapatillasRoutes from './zapatillasRouter.js'


const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/users', usersRouter)
apiRouter.use('/zapatillas', zapatillasRoutes)

export default apiRouter 