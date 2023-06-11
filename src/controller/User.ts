import { Request, Response } from "express";
import mapStatusHTTP from "../utils/mapStatusHTTP";
const { getUserService, getAllUsersService, createUserService, deleteUserService } = require("../service/User");

// Primeiro teste
const getUserController = async (req: Request, res: Response): Promise<Response> => {
    const name = req.query.name;
    console.log(name);

    const user = await getUserService(name?.toString() || "");
    if (!user) {
        return res.status(mapStatusHTTP(user)).json({
            status: "User not found",
        });
    }

    return res.status(mapStatusHTTP(user.status)).json({
        user,
    });
};

// Primeiro teste
const getAllUsersController = async (_req: Request, res: Response): Promise<Response> => {
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
const createUserController = async (req: Request, res: Response): Promise<Response> => {
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

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
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
}

module.exports = {
    getUserController,
    getAllUsersController,
    createUserController,
    deleteUserController,
}
