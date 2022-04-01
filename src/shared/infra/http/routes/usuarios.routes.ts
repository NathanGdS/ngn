import { Router } from "express";

import { CreateUsuarioController } from "@modules/accounts/useCases/createUsuario/CreateUsuarioController";
import { ListUsuariosController } from "@modules/accounts/useCases/listUsuario/ListUsuariosController";
import { UpdateUsuarioController } from "@modules/accounts/useCases/updateUsuario/UpdateUsuarioController";

import { ChangePasswordController } from "@modules/accounts/useCases/changePassword/ChangePasswordController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const listUsuariosController = new ListUsuariosController();
const updateUsuarioController = new UpdateUsuarioController();
const changePasswordController = new ChangePasswordController();

usuarioRoutes.post('/', ensureAuthenticated, createUsuarioController.handle)
usuarioRoutes.get('/', ensureAuthenticated, listUsuariosController.handle)
usuarioRoutes.put("/:id", ensureAuthenticated, updateUsuarioController.handle)

usuarioRoutes.patch("/senha/:id", ensureAuthenticated, changePasswordController.handle)

export { usuarioRoutes };