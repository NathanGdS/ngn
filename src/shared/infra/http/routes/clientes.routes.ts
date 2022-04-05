import { Router } from "express";

import { CreateClienteController } from "@modules/cliente/useCases/createCliente/CreateClienteController";
import { ListClienteController } from "@modules/cliente/useCases/listCliente/ListClienteController";
import { ListByIdClienteController } from "@modules/cliente/useCases/listByIdCliente/ListByIdClienteController";
import { UpdateClienteController } from "@modules/cliente/useCases/updateCliente/UpdateClienteController";
import { DeleteClienteController } from "@modules/cliente/useCases/deleteCliente/DeleteClienteController";

import { CreateTelefoneController } from "@modules/telefone/useCases/createTelefone/CreateTelefoneController";
import { ListTelefoneController } from "@modules/telefone/useCases/listTelefone/ListTelefoneController";
import { UpdateTelefoneController } from "@modules/telefone/useCases/updateTelefone/UpdateTelefoneController";
import { DeleteTelefoneController } from "@modules/telefone/useCases/deleteTelefone/DeleteTelefoneController";

import { CreateEnderecoController } from "@modules/endereco/useCases/createEndereco/CreateEnderecoController";
import { ListEnderecoController } from "@modules/endereco/useCases/listEndereco/ListEnderecoController";
import { UpdateEnderecoController } from "@modules/endereco/useCases/updateEndereco/UpdateEnderecoController";
import { DeleteEnderecoController } from "@modules/endereco/useCases/deleteEndereco/DeleteEnderecoController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const listClienteController = new ListClienteController();
const listByIdClienteController = new ListByIdClienteController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

const createTelefoneController = new CreateTelefoneController();
const listTelefoneController = new ListTelefoneController();
const updateTelefoneController = new UpdateTelefoneController();
const deleteTelefoneController = new DeleteTelefoneController();

const createEnderecoController = new CreateEnderecoController();
const listEnderecoController = new ListEnderecoController();
const updateEnderecoController = new UpdateEnderecoController();
const deleteEnderecoController = new DeleteEnderecoController();

clienteRoutes.post("/", ensureAuthenticated, createClienteController.handle);
clienteRoutes.get("/", ensureAuthenticated, listClienteController.handle);
clienteRoutes.get("/:id", ensureAuthenticated, listByIdClienteController.handle)
clienteRoutes.put("/:id", ensureAuthenticated, updateClienteController.handle);
clienteRoutes.delete("/:id", ensureAuthenticated, deleteClienteController.handle);

clienteRoutes.post("/telefone", ensureAuthenticated, createTelefoneController.handle);
clienteRoutes.get("/telefone", ensureAuthenticated, listTelefoneController.handle);
clienteRoutes.put("/telefone/:id", ensureAuthenticated, updateTelefoneController.handle);
clienteRoutes.delete("/telefone/:id", ensureAuthenticated, deleteTelefoneController.handle);

clienteRoutes.post("/endereco", ensureAuthenticated, createEnderecoController.handle);
clienteRoutes.get("/endereco", ensureAuthenticated, listEnderecoController.handle);
clienteRoutes.put("/endereco/:id", ensureAuthenticated, updateEnderecoController.handle);
clienteRoutes.delete("/endereco/:id", ensureAuthenticated, deleteEnderecoController.handle);

export { clienteRoutes };