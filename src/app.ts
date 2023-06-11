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

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

// para realizar as requisições, é necessário usar no Headers a chave Authorization com o token que se encontra no arquivo .env, decidi subí-lo para facilitar os testes, já que não há nenhum arquivo sensível.

// Separei os requisitos na estrutura MSC (Model, Service, Controller) para facilitar a leitura e manutenção do código.

// Primeiro teste
app.get("/user", getUserController);
app.get("/users", getAllUsersController);
// Segundo teste
app.post("/users", createUserController);
// Terceiro teste
app.delete("/users", requireLoginToken, deleteUserController);
// Quarto teste
app.put("/users", requireLoginToken, updateUserController);
// Quinto teste
app.get("/users/access", getTimesPulledUserController);

export default app;
