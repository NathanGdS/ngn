import { Router } from "express";

import { CreateClienteController } from "@modules/cliente/useCases/createCliente/CreateClienteController";
import { CreateEnderecoController } from "@modules/endereco/useCases/createEndereco/CreateEnderecoController";

import { ListEnderecoController } from "@modules/endereco/useCases/listEndereco/ListEnderecoController";
import { CreateTelefoneController } from "@modules/telefone/useCases/createTelefone/CreateTelefoneController";

import { ListTelefoneController } from "@modules/telefone/useCases/listTelefone/ListTelefoneController";
import { ListUsuarioController } from "@modules/usuario/useCases/listUsuario/ListUsuarioController";

const usuarioRoutes = Router();

const createClienteController = new CreateClienteController();
const listClienteController = new ListUsuarioController();

const createTelefoneController = new CreateTelefoneController();
const listTelefoneController = new ListTelefoneController();

const createEnderecoController = new CreateEnderecoController();
const listEnderecoController = new ListEnderecoController();

usuarioRoutes.post("/", createClienteController.handle);
usuarioRoutes.get("/", listClienteController.handle);

usuarioRoutes.post("/telefone", createTelefoneController.handle);
usuarioRoutes.get("/telefone", listTelefoneController.handle);

usuarioRoutes.post("/endereco", createEnderecoController.handle);
usuarioRoutes.get("/endereco", listEnderecoController.handle);


export { usuarioRoutes };