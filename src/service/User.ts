const { getUser, getAllUsers, createUser, deleteUser } = require("../model/User");
import { UserTypes, User } from "../types/User";

// Primeiro teste
const getUserService = async (userName: string): Promise<UserTypes> => {
    try {
        const user = await getUser(userName);

        if (user.status === "NOT_FOUND") {
            return {
                status: "NOT_FOUND",
            };
        }

        return user;
    } catch (error) {
        return {
            status: "",
        };
    }
};

// Primeiro teste
const getAllUsersService = async (): Promise<UserTypes> => {
    try {
        const users = await getAllUsers();

        if (users.status === "NOT_FOUND") {
            return {
                status: "NOT_FOUND",
            };
        }

        return users;
    } catch (error) {
        return {
            status: "",
        };
    }
};

// Segundo teste
const createUserService = async (user: User): Promise<UserTypes> => {
    try {
        const result = await createUser(user);

        if (result.status === "INVALID_DATA") {
            return {
                status: "INVALID_DATA",
            };
        }

        return result;
    } catch (error) {
        return {
            status: "",
        };
    }
};

// Terceiro teste
const deleteUserService = async (userName: string): Promise<UserTypes> => {
    try {
        const result = await deleteUser(userName);

        if (result.status === "NOT_FOUND") {
            return {
                status: "NOT_FOUND",
            };
        }

        return result;
    } catch (error) {
        return {
            status: "",
        };
    }
}

module.exports = {
    getUserService,
    getAllUsersService,
    createUserService,
    deleteUserService,
};
