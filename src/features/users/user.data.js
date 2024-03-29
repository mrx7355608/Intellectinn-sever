import { UserModel } from "./user.model.js";
import { BaseDataLayerFunctions } from "../../utils/BaseDataLayerFunctions.js";

const baseFunctions = BaseDataLayerFunctions(UserModel);

// FIND BY EMAIL
async function findUserByEmail(email) {
    const user = await UserModel.findOne({ email }, "-password -__v");
    return user;
}

// INSERT IN FOLLOWING
async function insertInFollowing(followerID, followingID) {
    const updatedUser = await UserModel.findByIdAndUpdate(
        followerID,
        {
            $push: { following: followingID },
        },
        { new: true },
    );
    return updatedUser;
}

// INSERT IN FOLLOWERS
async function insertInFollowers(followerID, followingID) {
    const updatedUser = await UserModel.findByIdAndUpdate(
        followingID,
        {
            $push: { followers: followerID },
        },
        { new: true },
    );
    return updatedUser;
}

// REMOVE FROM FOLLOWING
async function removeFromFollowing(followerID, followingID) {
    const updatedUser = await UserModel.findByIdAndUpdate(
        followerID,
        {
            $pull: { following: followingID },
        },
        { new: true },
    );
    return updatedUser;
}

// REMOVE FROM FOLLOWERS
async function removeFromFollowers(followerID, followingID) {
    const updatedUser = await UserModel.findByIdAndUpdate(
        followingID,
        {
            $pull: { followers: followerID },
        },
        { new: true },
    );
    return updatedUser;
}

export const usersDB = {
    findUserById: baseFunctions.findById,
    updateUser: baseFunctions.updateData,
    insertNewUser: baseFunctions.insertData,
    deleteUser: baseFunctions.deleteData,
    findUserByEmail,
    insertInFollowers,
    insertInFollowing,
    removeFromFollowers,
    removeFromFollowing,
};
