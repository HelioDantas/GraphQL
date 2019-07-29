const user = require('./user');
const todo = [{id: 312312, content: 'sdfsdfdsfsd'}, {id: 312312, content: 'sdfsdfdsfsd'}];
module.exports = {
    Query: {
        users: () => user.find(),
        user: (_, {id}) => user.findById(id),
    },
    User: {
        todos: (_, {id}) => todo
    },
    Mutation: {
        user: (_, {name, email}) => user.create({name, email})
    }
};