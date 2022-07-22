import DaoMongoDb from '../shared/mongodb/DaoMongoDb.js'

export default class DaoUsersMongoDb extends DaoMongoDb {
    constructor(db) {
        super(db, 'users')
    }
}
