const { users, roles } = require("../database/models/index");


async function login(email, password) {
    const userData = await users.findOne({
        where: { email },
        include: {
            attributes: ["name"],
            model: roles
        }
    });


    if (userData === null || !(userData.dataValues.password === password)) {
        return { loggedIn: false, token: null };
    }

    const token = "PLACEHOLDER_TOKEN";
    const { id, first_name, last_name, role } = userData;

    return { loggedIn: true, id, token, first_name, last_name, role: role.name };
}


module.exports = { login };