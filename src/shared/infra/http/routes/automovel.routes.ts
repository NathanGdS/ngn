import { Router } from "express";

import { CreateTipoAutomovelController } from "@modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelController";

const automovelRoutes = Router();

const createTipoAutomovelController = new CreateTipoAutomovelController();

automovelRoutes.post("/tipo", createTipoAutomovelController.handle);

export { automovelRoutes };