const User = require('./src/models/User');
require('./src/db/index');

async function store() {
    try {
        await User.create({
            firstName: 'John',
            lastName: 'Doe',
            email: 'aaa@bb.com'
        });
    } catch (errors) {
        errors.errors.forEach(error => {
            console.log(error.message);
        });
    }
}

store();