;
'use strict'

const cursoQueries = require('../queries/cursos.querys')
const cursoMutation = require('../mutations/curso.mutation')
const cursoTypes = require('../types/curso.type')


module.exports = {
    Query: cursoQueries,
    Mutation: cursoMutation,
    ...cursoTypes
}
