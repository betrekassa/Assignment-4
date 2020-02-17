
import { development } from './knexfile.js'
import knex from 'knex'

module.exports = {

    development: {
  
      client: 'postgresql',
      connection: {
        host:'localhost',
        user:'postgres',
        password:'kassa11?',
        database:'traffic_violation'
      }
  
    }
  
  };
export default knex(development);
