const { getUserController, getAllUsersController, createUserController, deleteUserController } = require('./controller/User');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const teste4 = require("../teste4");
const teste5 = require("../teste5");


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get("/user", getUserController);
app.get("/users", getAllUsersController);
app.post("/users", createUserController)
app.delete("/users", deleteUserController)
app.put("/users", teste4)
app.get("/users/access", teste5);

export default app;