import { Router } from "express";

import { CreateUsuarioController } from "@modules/usuario/useCases/createUsuario/CreateUsuarioController";
import { ListUsuarioController } from "@modules/usuario/useCases/listUsuario/ListUsuarioController";
import { UpdateUsuarioController } from "@modules/usuario/useCases/updateUsuario/UpdateUsuarioController";
import { DeleteUsuarioController } from "@modules/usuario/useCases/deleteUsuario/DeleteUsuarioController";

import { CreateEnderecoController } from "@modules/endereco/useCases/createEndereco/CreateEnderecoController";
import { ListEnderecoController } from "@modules/endereco/useCases/listEndereco/ListEnderecoController";

import { CreateTelefoneController } from "@modules/telefone/useCases/createTelefone/CreateTelefoneController";
import { ListTelefoneController } from "@modules/telefone/useCases/listTelefone/ListTelefoneController";

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const listUsuarioController = new ListUsuarioController();
const updateUsaurioController = new UpdateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();

const createTelefoneController = new CreateTelefoneController();
const listTelefoneController = new ListTelefoneController();

const createEnderecoController = new CreateEnderecoController();
const listEnderecoController = new ListEnderecoController();

usuarioRoutes.post("/", createUsuarioController.handle);
usuarioRoutes.get("/", listUsuarioController.handle);
usuarioRoutes.put("/:id", updateUsaurioController.handle);
usuarioRoutes.delete("/:id", deleteUsuarioController.handle);

usuarioRoutes.post("/telefone", createTelefoneController.handle);
usuarioRoutes.get("/telefone", listTelefoneController.handle);

usuarioRoutes.post("/endereco", createEnderecoController.handle);
usuarioRoutes.get("/endereco", listEnderecoController.handle);


export { usuarioRoutes };