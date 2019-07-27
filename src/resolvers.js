const users = [
    {id: 111, name: 'dsds', email: 'ee$dd'},
    {id: 111, name: 'dsds', email: 'ee$dd'}
];
module.exports = {
    Query: {
        users: () => {
            return users
        },
        user: (id) => {
            return users[id]
        }
    },
    Mutation: {
        user: (user) => {
            users.push(user)
        }
    }
};