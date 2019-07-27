const user = require('./user');
module.exports = {
    Query: {
        users: () => user.find(),
        user: (_, {id}) => user.findById(id)
    },
    Mutation: {
        user: (_, {name, email}) => user.create({name, email})
    }
};