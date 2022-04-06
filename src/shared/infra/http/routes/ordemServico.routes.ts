import { Router } from "express";

import { ListOrdemProcedimentosController } from "@modules/ordemServico/useCases/listOrdemProcedimentos/ListOrdemProcedimentosController";

import { ListStatusOrdemController } from "@modules/ordemServico/useCases/listStatusOrdem/ListStatusOrdemController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

const ordemServicoRoutes = Router();

//Ordem Procedimentos
const listOrdemProcedimentosController = new ListOrdemProcedimentosController();

ordemServicoRoutes.get("/", ensureAuthenticated, listOrdemProcedimentosController.handle);




//Ordem Pecas





//Status Ordem
const listStatusOrdemController = new ListStatusOrdemController();

ordemServicoRoutes.get("/status/:id", ensureAuthenticated, listStatusOrdemController.handle)

export { ordemServicoRoutes };