import { Router } from "express";

import { CreateUsuarioController } from "@modules/accounts/useCases/createUsuario/CreateUsuarioController";
import { ListUsuariosController } from "@modules/accounts/useCases/listUsuario/ListUsuariosController";
import { ListByIdUsuarioController } from "@modules/accounts/useCases/listByIdUsuario/ListByIdUsuarioController";
import { UpdateUsuarioController } from "@modules/accounts/useCases/updateUsuario/UpdateUsuarioController";
import { DeleteUsuarioController } from "@modules/accounts/useCases/deleteUsuario/DeleteUsuarioController";
import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const listUsuariosController = new ListUsuariosController();
const listByIdUsuarioController = new ListByIdUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();

usuarioRoutes.post('/', createUsuarioController.handle)
usuarioRoutes.get('/', ensureAuthenticated, listUsuariosController.handle)
usuarioRoutes.get("/:id", ensureAuthenticated, listByIdUsuarioController.handle)
usuarioRoutes.put("/:id", ensureAuthenticated, updateUsuarioController.handle)
usuarioRoutes.delete("/:id", ensureAuthenticated, ensureAdmin, deleteUsuarioController.handle)

export { usuarioRoutes };