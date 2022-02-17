import { Router } from "express";

import { CreateTipoAutomovelController } from "@modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelController";
import { ListTipoAutomovelController } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelController";
import { UpdateTipoAutomovelController } from "@modules/automovel/useCases/updateTipoAutomovel/UpdateTipoAutomovelController";

import { CreateAutomovelController } from "@modules/automovel/useCases/createAutomovel/CreateAutomovelController";
import { ListAutomovelController } from "@modules/automovel/useCases/listAutomovel/ListAutomovelController";
import { UpdateAutomovelController } from "@modules/automovel/useCases/updateAutomovel/UpdateAutomovelController";

const automovelRoutes = Router();

const createTipoAutomovelController = new CreateTipoAutomovelController();
const listTipoAutomovelController = new ListTipoAutomovelController();
const updateTipoAutomovelController = new UpdateTipoAutomovelController();

const createAutomovelController = new CreateAutomovelController();
const listAutomovelController = new ListAutomovelController();
const updateAutomovelController = new UpdateAutomovelController();

automovelRoutes.post("/tipo", createTipoAutomovelController.handle);
automovelRoutes.get("/tipo", listTipoAutomovelController.handle);
automovelRoutes.put("tipo/:id", updateTipoAutomovelController.handle);

automovelRoutes.post("/", createAutomovelController.handle);
automovelRoutes.get("/", listAutomovelController.handle);
automovelRoutes.put("/:id", updateAutomovelController.handle);

export { automovelRoutes }; 