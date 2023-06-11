const DATA = require("../../fakeData");
import { User, UserTypes } from "../types/User";

// Primeiro teste
const getUser = (userName: string): UserTypes => {
    const user = DATA.find((user: User) => user.name === userName);

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
    const users = DATA;

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
        id: DATA.length + 1,
        name: user.name,
        job: user.job,
    };

    DATA.push(newUser);

    const isValidate = DATA.find((user: User) => user.name === user.name);

    if (!isValidate) {
        return {
            status: "INVALID_DATA",
        };
    }

    return {
        status: "SUCCESSFUL",
    };
};

// Terceiro teste
const deleteUser = (userName: string) => {
    const user = DATA.find((user: User) => user.name === userName);

    if (!user) {
        return {
            status: "NOT_FOUND",
        };
    }

    const index = DATA.indexOf(user);

    DATA.splice(index, 1);

    return {
        status: "SUCCESSFUL",
    };
};

module.exports = {
    getUser,
    getAllUsers,
    createUser,
    deleteUser,
};
