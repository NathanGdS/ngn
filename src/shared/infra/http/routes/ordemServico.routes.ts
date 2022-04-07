import { Router } from "express";

import { ListOrdemProcedimentosController } from "@modules/ordemServico/useCases/listOrdemProcedimentos/ListOrdemProcedimentosController";
import { CreateOrdemProcedimentoController } from "@modules/ordemServico/useCases/createOrdemProcedimento/CreateOrdemProcedimentoController";

import { ListStatusOrdemController } from "@modules/ordemServico/useCases/listStatusOrdem/ListStatusOrdemController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

const ordemServicoRoutes = Router();

//Ordem Procedimentos
const listOrdemProcedimentosController = new ListOrdemProcedimentosController();
const createOrdemProcedimentosController = new CreateOrdemProcedimentoController();

ordemServicoRoutes.get("/procedimentos", ensureAuthenticated, listOrdemProcedimentosController.handle);
ordemServicoRoutes.post("/procedimentos", ensureAuthenticated, createOrdemProcedimentosController.handle);


//Ordem Pecas





//Status Ordem
const listStatusOrdemController = new ListStatusOrdemController();

ordemServicoRoutes.get("/status/:id", ensureAuthenticated, listStatusOrdemController.handle)

export { ordemServicoRoutes };