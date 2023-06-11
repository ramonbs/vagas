const {fakeData} = require("../../fakeData");
import { User, UserTypes } from "../types/User";

// Primeiro teste
const getUser = (userName: string): UserTypes => {
    const user = fakeData.find((user: User) => user.name === userName);

    if (!user) {
        return {
            status: "NOT_FOUND",
        };
    }

    return {
        status: "GET_SUCCESSFUL",
        user,
    };
};

// Primeiro teste
const getAllUsers = () => {
    const users = fakeData;

    if (!users) {
        return {
            status: "NOT_FOUND",
        };
    }

    return {
        status: "GET_SUCCESSFUL",
        users,
    };
};

// Segundo teste
const createUser = (user: User) => {
    const newUser = {
        id: fakeData.length + 1,
        name: user.name,
        job: user.job,
    };

    fakeData.push(newUser);

    const isValidate = fakeData.find((user: User) => user.name === user.name);

    if (!isValidate) {
        return {
            status: "INVALID_fakeData",
        };
    }

    return {
        status: "SUCCESSFUL",
    };
};

// Terceiro teste
const deleteUser = (userName: string) => {
    const user = fakeData.find((user: User) => user.name === userName);

    if (!user) {
        return {
            status: "NOT_FOUND",
        };
    }

    const index = fakeData.indexOf(user);

    fakeData.splice(index, 1);

    return {
        status: "SUCCESSFUL",
    };
};

// Quarto teste
const updateUser = (user: User) => {
    const userToUpdate = fakeData.find((user: User) => user.name === user.name);

    if (!userToUpdate) {
        return {
            status: "NOT_FOUND",
        };
    }

    const index = fakeData.indexOf(userToUpdate);

    fakeData[index] = user;

    return {
        status: "SUCCESSFUL",
    };
}

module.exports = {
    getUser,
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
};
