import { Router } from 'express'
import * as zapatillasController from '../controllers/zapatillasController.js'


const zapatillasRoutes = new Router();

//GET 'api/zapatillas' -> devuelve todos los zapatillas
zapatillasRoutes.get('/', zapatillasController.get)
//GET 'api/zapatillas/:id' -> devuelve un zapatilla según su id.
zapatillasRoutes.get('/:idZapatilla', zapatillasController.getId)

export default zapatillasRoutes 