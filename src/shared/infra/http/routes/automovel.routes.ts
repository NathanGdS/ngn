import { Router } from "express";

import { CreateTipoAutomovelController } from "@modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelController";
import { ListTipoAutomovelController } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelController";

import { CreateAutomovelController } from "@modules/automovel/useCases/createAutomovel/CreateAutomovelController";

const automovelRoutes = Router();

const createTipoAutomovelController = new CreateTipoAutomovelController();
const listTipoAutomovelController = new ListTipoAutomovelController();

const createAutomovelController = new CreateAutomovelController();

automovelRoutes.post("/", createAutomovelController.handle);

automovelRoutes.post("/tipo", createTipoAutomovelController.handle);
automovelRoutes.get("/tipo", listTipoAutomovelController.handle);

export { automovelRoutes }; 