const promise = require('bluebird')
const options = { promiseLib: promise }
const config = require('./config')
const pgp = require('pg-promise')(options)

const connection = config(process.env.NODE_ENV)

const db = pgp(connection)

module.exports = db
