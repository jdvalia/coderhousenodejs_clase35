import { listarZapatillas, listarZapatilla } from '../services/zapatillaService.js'
import logger from '../logger.js'

//devuelve todas las zapatillas
export async function get(req, res, next) {
    logger.info(`GET /api/zapatillas`)
    try {
        res.status(200).json(await listarZapatillas())
    }
    catch (err) {
        logger.error(err);
        next(error)
    }
}

//Se pide un id de zapatilla y devuelve solo los datos de esa zapatilla
export async function getId(req, res, next) {
    logger.info(`GET /api/zapatillas/{idZapatilla}`)
    try {
        let id = req.params.idZapatilla;
        res.status(200).json(await listarZapatilla(id))
    }
    catch (err) {
        logger.error(err);
        next(error)
    }
}