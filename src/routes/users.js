

// Implement hashing
async function createUser(userData, password) {
    let userCreationData;
    try {
        userCreationData = await user.create({
            ...userData
        });

    } catch (error) {
        return { success: false };
    }

    return { success: true, userCreationData: userCreationData.dataValues };
};

module.exports = { createUser };