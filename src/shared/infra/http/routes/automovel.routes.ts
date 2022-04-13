import { Router } from "express";

import { CreateTipoAutomovelController } from "@modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelController";
import { ListTipoAutomovelController } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelController";
import { ListByIdTipoAutomovelController } from "@modules/automovel/useCases/listByIdTipoAutomovel/ListByIdTipoAutomovelController";
import { UpdateTipoAutomovelController } from "@modules/automovel/useCases/updateTipoAutomovel/UpdateTipoAutomovelController";
import { DeleteTipoAutomovelController } from "@modules/automovel/useCases/deleteTipoAutomovel/DeleteTipoAutomovelController";

import { CreateAutomovelController } from "@modules/automovel/useCases/createAutomovel/CreateAutomovelController";
import { ListAutomovelController } from "@modules/automovel/useCases/listAutomovel/ListAutomovelController";
import { ListByIdAutomovelController } from "@modules/automovel/useCases/listByIdAutomovel/ListByIdAutomovelController";
import { UpdateAutomovelController } from "@modules/automovel/useCases/updateAutomovel/UpdateAutomovelController";
import { DeleteAutomovelController } from "@modules/automovel/useCases/deleteAutomovel/DeleteAutomovelController";

import { ensureAuthenticated } from "@middlewares/ensureAuthentication";
import { ensureAdmin } from "@middlewares/ensureAdmin";

const automovelRoutes = Router();

const createTipoAutomovelController = new CreateTipoAutomovelController();
const listTipoAutomovelController = new ListTipoAutomovelController();
const listByIdTipoAutomovelController = new ListByIdTipoAutomovelController();
const updateTipoAutomovelController = new UpdateTipoAutomovelController();
const deleteTipoAutomovelController = new DeleteTipoAutomovelController();

const createAutomovelController = new CreateAutomovelController();
const listAutomovelController = new ListAutomovelController();
const listByIdAutomovelController = new ListByIdAutomovelController();
const updateAutomovelController = new UpdateAutomovelController();
const deleteAutomovelController = new DeleteAutomovelController();

automovelRoutes.post("/", ensureAuthenticated, createAutomovelController.handle)
automovelRoutes.get("/", ensureAuthenticated, listAutomovelController.handle)
automovelRoutes.get("/:id", ensureAuthenticated, listByIdAutomovelController.handle)
automovelRoutes.put("/:id", ensureAuthenticated, updateAutomovelController.handle)
automovelRoutes.delete("/:id", ensureAuthenticated, deleteAutomovelController.handle)

automovelRoutes.post("/tipo", ensureAuthenticated, ensureAdmin, createTipoAutomovelController.handle)
automovelRoutes.get("/tipo/list", ensureAuthenticated, ensureAdmin, listTipoAutomovelController.handle)
automovelRoutes.get("/tipo/:id", ensureAuthenticated, listByIdTipoAutomovelController.handle)
automovelRoutes.patch("/tipo/:id", ensureAuthenticated, updateTipoAutomovelController.handle)
automovelRoutes.delete("/tipo/:id", ensureAuthenticated, deleteTipoAutomovelController.handle)


export { automovelRoutes }; 