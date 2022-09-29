const knexFile = import('../../knexfile')
const knex = import('knex')(knexFile['development'])


module.exports = knex
