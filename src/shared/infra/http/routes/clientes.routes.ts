import { Router } from "express";

import { CreateClienteController } from "@modules/cliente/useCases/createCliente/CreateClienteController";
import { ListClienteController } from "@modules/cliente/useCases/listCliente/ListClienteController";
import { ListByIdClienteController } from "@modules/cliente/useCases/listByIdCliente/ListByIdClienteController";
import { UpdateClienteController } from "@modules/cliente/useCases/updateCliente/UpdateClienteController";
import { DeleteClienteController } from "@modules/cliente/useCases/deleteCliente/DeleteClienteController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const listClienteController = new ListClienteController();
const listByIdClienteController = new ListByIdClienteController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

clienteRoutes.post("/", ensureAuthenticated, createClienteController.handle);
clienteRoutes.get("/", ensureAuthenticated, listClienteController.handle);
clienteRoutes.get("/:id", ensureAuthenticated, listByIdClienteController.handle)
clienteRoutes.put("/:id", ensureAuthenticated, updateClienteController.handle);
clienteRoutes.delete("/:id", ensureAuthenticated, ensureAdmin, deleteClienteController.handle);


export { clienteRoutes };