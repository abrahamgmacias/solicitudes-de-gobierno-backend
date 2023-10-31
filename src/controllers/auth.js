const { users } = require("../database/models/index");


async function login(email, password) {
    const userData = await users.findOne({
        where: { email }
    });

    if (userData === null || !(userData.dataValues.password === password)) {
        return { loggedIn: false, token: null };
    }

    const token = "PLACEHOLDER_TOKEN";
    const { id, first_name, last_name } = userData;

    return { loggedIn: true, id, token, first_name, last_name };
}


module.exports = { login };