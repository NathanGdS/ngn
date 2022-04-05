import { Router } from "express";

import { ListOrdemProcedimentosController } from "@modules/ordemServico/useCases/listOrdemProcedimentos/ListOrdemProcedimentosController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

const ordemServicoRoutes = Router();

//Ordem Procedimentos
const listOrdemProcedimentosController = new ListOrdemProcedimentosController();

ordemServicoRoutes.get("/", ensureAuthenticated, listOrdemProcedimentosController.handle);




//Ordem Pecas





//Status Ordem



export { ordemServicoRoutes };