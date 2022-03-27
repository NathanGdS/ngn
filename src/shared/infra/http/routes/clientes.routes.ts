import { Router } from "express";

import { CreateClienteController } from "@modules/cliente/useCases/createCliente/CreateClienteController";
import { ListClienteController } from "@modules/cliente/useCases/listCliente/ListClienteController";
import { UpdateClienteController } from "@modules/cliente/useCases/updateCliente/UpdateClienteController";
import { DeleteClienteController } from "@modules/cliente/useCases/deleteCliente/DeleteClienteController";

import { CreateTelefoneController } from "@modules/telefone/useCases/createTelefone/CreateTelefoneController";
import { ListTelefoneController } from "@modules/telefone/useCases/listTelefone/ListTelefoneController";
import { UpdateEnderecoController } from "@modules/endereco/useCases/updateEndereco/UpdateEnderecoController";
import { DeleteTelefoneController } from "@modules/telefone/useCases/deleteTelefone/DeleteTelefoneController";

// import { CreateEnderecoController } from "@modules/endereco/useCases/createEndereco/CreateEnderecoController";
// import { ListEnderecoController } from "@modules/endereco/useCases/listEndereco/ListEnderecoController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const listClienteController = new ListClienteController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

const createTelefoneController = new CreateTelefoneController();
const listTelefoneController = new ListTelefoneController();
const updateTelefoneController = new UpdateEnderecoController();
const deleteTelefoneController = new DeleteTelefoneController();

// const createEnderecoController = new CreateEnderecoController();
// const listEnderecoController = new ListEnderecoController();

clienteRoutes.post("/", ensureAuthenticated, createClienteController.handle);
clienteRoutes.get("/", ensureAuthenticated, listClienteController.handle);
clienteRoutes.put("/:id", ensureAuthenticated, updateClienteController.handle);
clienteRoutes.delete("/:id", ensureAuthenticated, deleteClienteController.handle);

clienteRoutes.post("/telefone", createTelefoneController.handle);
clienteRoutes.get("/telefone", listTelefoneController.handle);
clienteRoutes.put("/:id", ensureAuthenticated, updateTelefoneController.handle);
clienteRoutes.delete("/:id", ensureAuthenticated, deleteTelefoneController.handle);

// clienteRoutes.post("/endereco", createEnderecoController.handle);
// clienteRoutes.get("/endereco", listEnderecoController.handle);

export { clienteRoutes };