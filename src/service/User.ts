const {
    getUser,
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    getTimesPulledUser,
} = require("../model/User");
import { UserTypes, User } from "../types/User";

// Primeiro teste
const getUserService = async (userName: string): Promise<UserTypes> => {
    try {
        const user = await getUser(userName);

        console.log(user);

        if (user.status === "NOT_FOUND") {
            return {
                status: "NOT_FOUND",
            };
        }

        return {
            status: "GET_SUCCESSFUL",
            user,
        };
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

        console.log(users);

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

        console.log(result);

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
};

// Quarto teste
const updateUserService = async (user: User): Promise<UserTypes> => {
    try {
        const result = await updateUser(user);

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
};

// Quinto teste
const getTimesPulledUserService = async (
    userName: string,
): Promise<UserTypes> => {
    try {
        const result = await getTimesPulledUser(userName);

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
};

module.exports = {
    getUserService,
    getAllUsersService,
    createUserService,
    deleteUserService,
    updateUserService,
    getTimesPulledUserService,
};
