import DaoUsersMemoria from './DaoUsersMemoria.js'
import DaoUsersMongoDb from './DaoUsersMongoDb.js'
import DaoUsersMySQL from './DaoUsersMySQL.js'
import config from '../../config/config.js'

let daoUsers
switch (config.MODO_PERSISTENCIA) {
    case 'mongodb':
        const { db } = await import('../shared/mongodb/mongoClient.js')
        daoUsers = new DaoUsersMongoDb(db)
        break
    case 'mysql':
        const { knex } = await import('../shared/sql/knexClient.js')
        daoUsers = new DaoUsersMySQL(knex)
        break
    default:
        daoUsers = new DaoUsersMemoria()
}

export default daoUsers