;
'use strict'

const estudianteQueries = require('../queries/estudiante.querys')
const estudianteMutation = require('../mutations/estudiante.mutation')

module.exports = {
    Query: estudianteQueries,
    Mutation: estudianteMutation
}
