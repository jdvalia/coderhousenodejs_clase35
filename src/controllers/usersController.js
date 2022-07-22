import { afiliarUser, listarUsers } from '../services/usersService.js'
import logger from '../logger.js'

export async function post(req, res, next) {
    try {
        const afiliada = await afiliarUser(req.body)
        res.status(201).json(afiliada)
    } catch (error) {
        next(error)
    }
}

export async function get(req, res, next) {
    logger.info(`GET /api/users`)
    try {
        res.json(await listarUsers())
    } catch (error) {
        next(error)
    }
}
