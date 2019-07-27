const {GraphQLServer} = require('graphql-yoga');
const path = require('path');
const resolvers = require('./src/resolvers');
const server = GraphQLServer({
    typeDefs: path.resolve(__dirname, '/src/schema.graphql'),
    resolvers
});

server.start();