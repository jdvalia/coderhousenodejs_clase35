import DaoMongoDb from '../shared/mongodb/DaoMongoDb.js'

export default class DaoZapatillasMongoDb extends DaoMongoDb {
    constructor(db) {
        super(db, 'zapatillas')
    }
}
