import { Router } from "express";

import { CreateClienteController } from "@modules/cliente/useCases/createCliente/CreateClienteController";
import { ListClienteController } from "@modules/cliente/useCases/listCliente/ListClienteController";
import { UpdateClienteController } from "@modules/cliente/useCases/updateCliente/UpdateClienteController";
import { DeleteClienteController } from "@modules/cliente/useCases/deleteCliente/DeleteClienteController";


import { CreateTelefoneController } from "@modules/telefone/useCases/createTelefone/CreateTelefoneController";
import { ListTelefoneController } from "@modules/telefone/useCases/listTelefone/ListTelefoneController";

import { CreateEnderecoController } from "@modules/endereco/useCases/createEndereco/CreateEnderecoController";
import { ListEnderecoController } from "@modules/endereco/useCases/listEndereco/ListEnderecoController";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const listClienteController = new ListClienteController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

const createTelefoneController = new CreateTelefoneController();
const listTelefoneController = new ListTelefoneController();

const createEnderecoController = new CreateEnderecoController();
const listEnderecoController = new ListEnderecoController();

clienteRoutes.post("/", createClienteController.handle);
clienteRoutes.get("/", listClienteController.handle);
clienteRoutes.put("/:id", updateClienteController.handle);
clienteRoutes.delete("/:id", deleteClienteController.handle);

clienteRoutes.post("/telefone", createTelefoneController.handle);
clienteRoutes.get("/telefone", listTelefoneController.handle);

clienteRoutes.post("/endereco", createEnderecoController.handle);
clienteRoutes.get("/endereco", listEnderecoController.handle);

export { clienteRoutes };