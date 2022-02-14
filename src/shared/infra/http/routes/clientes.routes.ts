import { Router } from "express";

import { CreateClienteController } from "@modules/cliente/useCases/createCliente/CreateClienteController";
import { ListClienteController } from "@modules/cliente/useCases/listCliente/ListClienteController";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const listClienteController = new ListClienteController();

clienteRoutes.post("/", createClienteController.handle);
clienteRoutes.get("/", listClienteController.handle);

export { clienteRoutes };