import { Router } from "express";

import { CreateTipoAutomovelController } from "@modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelController";
import { ListTipoAutomovelController } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelController";
import { UpdateTipoAutomovelController } from "@modules/automovel/useCases/updateTipoAutomovel/UpdateTipoAutomovelController";
import { DeleteTipoAutomovelController } from "@modules/automovel/useCases/deleteTipoAutomovel/DeleteTipoAutomovelController";

import { CreateAutomovelController } from "@modules/automovel/useCases/createAutomovel/CreateAutomovelController";
import { ListAutomovelController } from "@modules/automovel/useCases/listAutomovel/ListAutomovelController";

import { ensureAuthenticated } from "@middlewares/ensureAuthentication";

const automovelRoutes = Router();

const createTipoAutomovelController = new CreateTipoAutomovelController();
const listTipoAutomovelController = new ListTipoAutomovelController();
const updateTipoAutomovelController = new UpdateTipoAutomovelController();
const deleteTipoAutomovelController = new DeleteTipoAutomovelController();

const createAutomovelController = new CreateAutomovelController();
const listAutomovelController = new ListAutomovelController();

automovelRoutes.post("/", ensureAuthenticated, createAutomovelController.handle);
automovelRoutes.get("/", listAutomovelController.handle);


automovelRoutes.post("/tipo", ensureAuthenticated, createTipoAutomovelController.handle);
automovelRoutes.get("/tipo", listTipoAutomovelController.handle);
automovelRoutes.patch("/tipo/:id", ensureAuthenticated, updateTipoAutomovelController.handle)
automovelRoutes.delete("/tipo/:id", ensureAuthenticated, deleteTipoAutomovelController.handle);


export { automovelRoutes }; 