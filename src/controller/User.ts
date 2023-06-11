import { Request, Response } from "express";
import mapStatusHTTP from "../utils/mapStatusHTTP";
const {
    getUserService,
    getAllUsersService,
    createUserService,
    deleteUserService,
    updateUserService,
} = require("../service/User");

// Primeiro teste
const getUserController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const name = req.query.name;

    const {user: { user }, status, userPulled: { timesPulled }} = await getUserService(name?.toString() || "");
    
    if (!user) {
        return res.status(mapStatusHTTP(user)).json({
            status: "User not found",
        });
    }

    return res.status(mapStatusHTTP(status)).json({
        status,
        user,
        timesPulled,
    });
};

// Primeiro teste
const getAllUsersController = async (
    _req: Request,
    res: Response,
): Promise<Response> => {
    const users = await getAllUsersService();

    if (!users) {
        return res.status(mapStatusHTTP(users)).json({
            status: "Users not found",
        });
    }

    return res.status(mapStatusHTTP(users.status)).json({
        users,
    });
};

// Segundo teste
const createUserController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = req.body;

    const result = await createUserService(user);

    if (!result) {
        return res.status(mapStatusHTTP(result)).json({
            status: "User not created",
        });
    }

    return res.status(mapStatusHTTP(result.status)).json({
        status: "User created",
    });
};

// Terceiro teste
const deleteUserController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const name = req.query.name;

    const result = await deleteUserService(name?.toString() || "");

    if (!result) {
        return res.status(mapStatusHTTP(result)).json({
            status: "User not deleted",
        });
    }

    return res.status(mapStatusHTTP(result.status)).json({
        status: "Sucess",
    });
};

// Quarto teste
const updateUserController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = req.body;

    const result = await updateUserService(user);

    if (!result) {
        return res.status(mapStatusHTTP(result)).json({
            status: "User not updated",
        });
    }

    return res.status(mapStatusHTTP(result.status)).json({
        status: "User updated",
    });
};

module.exports = {
    getUserController,
    getAllUsersController,
    createUserController,
    deleteUserController,
    updateUserController,
};
