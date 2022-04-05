import { Router } from "express";

import { ListOrdemProcedimentosController } from "@modules/ordemServico/useCases/listOrdemProcedimentos/ListOrdemProcedimentosController";

const ordemServicoRoutes = Router();

//Ordem Procedimentos
const listOrdemProcedimentosController = new ListOrdemProcedimentosController();

ordemServicoRoutes.get("/", listOrdemProcedimentosController.handle);




//Ordem Pecas





//Status Ordem



export { ordemServicoRoutes };