import { UserModel } from "./user.model.js";

// FIND BY ID
async function findUserById(id) {
    const user = await UserModel.findById(id, "-password -__v");
    return user;
}

// FIND BY EMAIL
async function findUserByEmail(email) {
    const user = await UserModel.findOne({ email }, "-password -__v");
    return user;
}

// INSERT NEW USER
async function insertNewUser(data) {
    const newUser = await UserModel.create(data);
    return newUser;
}

// UPDATE USER
async function updateUser(id, changes) {
    const updatedUser = await UserModel.findByIdAndUpdate(id, changes, {
        select: { password: 0, __v: 0 },
        new: true,
    });
    return updatedUser;
}

// DELETE USER
async function deleteUser(id) {
    await UserModel.findByIdAndDelete(id);
    return null;
}

// INSERT IN FOLLOWING
async function insertInFollowing(followerID, followingID) {
    const updatedUser = await UserModel.findById(followerID, {
        $push: { following: followingID },
    });
    return updatedUser;
}

// INSERT IN FOLLOWERS
async function insertInFollowers(followerID, followingID) {
    const updatedUser = await UserModel.findById(followingID, {
        $push: { followers: followerID },
    });
    return updatedUser;
}

// REMOVE FROM FOLLOWING
async function removeFromFollowing(followerID, followingID) {
    const updatedUser = await UserModel.findById(followerID, {
        $pull: { following: followingID },
    });
    return updatedUser;
}

// REMOVE FROM FOLLOWERS
async function removeFromFollowers(followerID, followingID) {
    const updatedUser = await UserModel.findById(followingID, {
        $pull: { followers: followerID },
    });
    return updatedUser;
}

export const usersDB = {
    findUserById,
    findUserByEmail,
    updateUser,
    insertNewUser,
    deleteUser,
    insertInFollowers,
    insertInFollowing,
    removeFromFollowers,
    removeFromFollowing,
};