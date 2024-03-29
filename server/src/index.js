require('dotenv').config()

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

const { resolvers } = require('./graphql')

const typeDefs = importSchema('./src/graphql/schema.graphql')

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })

app.use('/', express.static('public'))
const port = process.env.SERVER_PORT || 4000

app.listen(port, () => console.log(`App listening on port ${port}!`))