const { v1: uuidv1 } = require('uuid');

async function clear(knex) {
  await knex('todo').del()
}

async function seed(knex) {
  await clear(knex)
  await knex('todo').insert({
    id: uuidv1(),
    title: 'Test action one',
    complete: false
  })
  await knex('todo').insert({
    id: uuidv1(),
    title: 'Test action two',
    complete: false
  })
}

module.exports = { clear, seed }