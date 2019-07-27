const {GraphQLServer} = require('graphql-yoga');
const path = require('path');
const resolvers = require('./src/resolvers');
const mongose = require('mongoose');
mongose.connect('mongodb://admin:123@localhost:27017/admin', {
    useNewUrlParser: true
}, (error) => {
    if (!error) {
        return true;
    }
    throw error.message;
}).catch(error => console.error(error));
const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'src/schema.graphql'),
    resolvers
});

server.start();