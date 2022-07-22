import DaoZapatillasMemoria from './daoZapatillasMemoria.js'
import DaoZapatillasMongoDb from './daoZapatillasMongoDb.js'

import config from '../../config/config.js'

let daoZapatillas

switch (config.MODO_PERSISTENCIA) {
    case 'mongodb':
        const { db } = await import('../shared/mongodb/mongoClient.js')
        daoZapatillas = new DaoZapatillasMongoDb(db)
        break
    default:
        daoZapatillas = new DaoZapatillasMemoria()

}

export default daoZapatillas