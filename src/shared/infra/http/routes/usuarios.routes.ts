import { Router } from "express";

import { CreateUsuarioController } from "@modules/accounts/useCases/createUsuario/CreateUsuarioController";
import { ListUsuariosController } from "@modules/accounts/useCases/listUsuarios/ListUsuariosController";
import { ensureAuthenticated } from "../middlewares/ensureAuthentication";


const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const listUsuariosController = new ListUsuariosController();

usuarioRoutes.post('/', createUsuarioController.handle);
usuarioRoutes.get('/', ensureAuthenticated, listUsuariosController.handle);

export { usuarioRoutes };