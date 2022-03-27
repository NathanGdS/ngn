import { Router } from "express";

import { CreateTipoAutomovelController } from "@modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelController";
import { ListTipoAutomovelController } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelController";
import { UpdateTipoAutomovelController } from "@modules/automovel/useCases/updateTipoAutomovel/UpdateTipoAutomovelController";
import { DeleteTipoAutomovelController } from "@modules/automovel/useCases/deleteTipoAutomovel/DeleteTipoAutomovelController";

import { CreateAutomovelController } from "@modules/automovel/useCases/createAutomovel/CreateAutomovelController";
import { ListAutomovelController } from "@modules/automovel/useCases/listAutomovel/ListAutomovelController";
import { UpdateAutomovelController } from "@modules/automovel/useCases/updateAutomovel/UpdateAutomovelController";
import { DeleteAutomovelController } from "@modules/automovel/useCases/deleteAutomovel/DeleteAutomovelController";

import { ensureAuthenticated } from "@middlewares/ensureAuthentication";

const automovelRoutes = Router();

const createTipoAutomovelController = new CreateTipoAutomovelController();
const listTipoAutomovelController = new ListTipoAutomovelController();
const updateTipoAutomovelController = new UpdateTipoAutomovelController();
const deleteTipoAutomovelController = new DeleteTipoAutomovelController();

const createAutomovelController = new CreateAutomovelController();
const listAutomovelController = new ListAutomovelController();
const updateAutomovelController = new UpdateAutomovelController();
const deleteAutomovelController = new DeleteAutomovelController();

automovelRoutes.post("/", ensureAuthenticated, createAutomovelController.handle);
automovelRoutes.get("/", ensureAuthenticated, listAutomovelController.handle);
automovelRoutes.put("/:id", ensureAuthenticated, updateAutomovelController.handle);
automovelRoutes.delete("/:id", ensureAuthenticated, deleteAutomovelController.handle);

automovelRoutes.post("/tipo", ensureAuthenticated, createTipoAutomovelController.handle);
automovelRoutes.get("/tipo", ensureAuthenticated, listTipoAutomovelController.handle);
automovelRoutes.patch("/tipo/:id", ensureAuthenticated, updateTipoAutomovelController.handle)
automovelRoutes.delete("/tipo/:id", ensureAuthenticated, deleteTipoAutomovelController.handle);


export { automovelRoutes }; 