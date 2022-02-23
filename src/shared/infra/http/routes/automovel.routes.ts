import { Router } from "express";

import { CreateTipoAutomovelController } from "@modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelController";
import { ListTipoAutomovelController } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelController";
import { UpdateTipoAutomovelController } from "@modules/automovel/useCases/updateTipoAutomovel/UpdateTipoAutomovelController";
import { DeleteTipoAutomovelController } from "@modules/automovel/useCases/deleteTipoAutomovel/DeleteTipoAutomovelController";

import { CreateAutomovelController } from "@modules/automovel/useCases/createAutomovel/CreateAutomovelController";
import { ListAutomovelController } from "@modules/automovel/useCases/listAutomovel/ListAutomovelController";

const automovelRoutes = Router();

const createTipoAutomovelController = new CreateTipoAutomovelController();
const listTipoAutomovelController = new ListTipoAutomovelController();
const updateTipoAutomovelController = new UpdateTipoAutomovelController();
const deleteTipoAutomovelController = new DeleteTipoAutomovelController();

const createAutomovelController = new CreateAutomovelController();
const listAutomovelController = new ListAutomovelController();

automovelRoutes.post("/", createAutomovelController.handle);
automovelRoutes.get("/", listAutomovelController.handle);

automovelRoutes.post("/tipo", createTipoAutomovelController.handle);
automovelRoutes.get("/tipo", listTipoAutomovelController.handle);
automovelRoutes.patch("/tipo/:id", updateTipoAutomovelController.handle)
automovelRoutes.delete("/tipo/:id", deleteTipoAutomovelController.handle);

export { automovelRoutes }; 