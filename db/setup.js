const { Model } = require('objection')
const KnexConfig = require('./knexfile')
const Knex = require('knex')

const knex = Knex(KnexConfig.development)
Model.knex(knex)