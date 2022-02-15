import { CreateClienteController } from "@modules/cliente/useCases/createCliente/CreateClienteController";
import { ListUsuarioController } from "@modules/usuario/useCases/listUsuario/ListUsuarioController";
import { Router } from "express";

const usuarioRoutes = Router();

const createClienteController = new CreateClienteController();
const listClienteController = new ListUsuarioController();

usuarioRoutes.post("/", createClienteController.handle);
usuarioRoutes.get("/", listClienteController.handle);


export { usuarioRoutes };