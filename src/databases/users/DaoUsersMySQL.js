import DaoMySQL from '../shared/sql/DaoMySQL.js'

export default class DaoUsersMySQL extends DaoMySQL {
    constructor(knex) {
        super(knex, 'users')
    }
}
