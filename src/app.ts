import requireLoginToken from "./middleware/requireLoginToken";

const {
    getUserController,
    getAllUsersController,
    createUserController,
    deleteUserController,
    updateUserController,
    getTimesPulledUserController,
} = require("./controller/User");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const teste5 = require("../teste5");

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

// para realizar as requisições, é necessário usar no Headers o token que se encontra no arquivo .env, decidi subí-lo para facilitar os testes, já que não há nenhum arquivo sensível.

app.get("/user", getUserController);
app.get("/users", getAllUsersController);
app.post("/users", createUserController);
app.delete("/users", requireLoginToken, deleteUserController);
app.put("/users", requireLoginToken, updateUserController);
app.get("/users/access", getTimesPulledUserController);

export default app;
