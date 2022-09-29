// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'learn-knex',
      user: 'postgres',
      password: 'admin'
    }
  }

};
