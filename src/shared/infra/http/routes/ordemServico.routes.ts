import { Router } from "express";

import { ListOrdemProcedimentosController } from "@modules/ordemServico/useCases/listOrdemProcedimentos/ListOrdemProcedimentosController";
import { CreateOrdemProcedimentoController } from "@modules/ordemServico/useCases/createOrdemProcedimento/CreateOrdemProcedimentoController";

import { ListOrdemPecasController } from "@modules/ordemServico/useCases/listOrdemPeca/ListOrdemPecasController";
import { CreateOrdemPecaController } from "@modules/ordemServico/useCases/createOrdemPeca/CreateOrdemPecaController";
import { DeleteOrdemPecaController } from "@modules/ordemServico/useCases/deleteOrdemPeca/DeleteOrdemPecaController";

import { ListStatusOrdemController } from "@modules/ordemServico/useCases/listStatusOrdem/ListStatusOrdemController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

const ordemServicoRoutes = Router();

//Ordem Procedimentos
const listOrdemProcedimentosController = new ListOrdemProcedimentosController();
const createOrdemProcedimentosController = new CreateOrdemProcedimentoController();

ordemServicoRoutes.get("/procedimentos", ensureAuthenticated, listOrdemProcedimentosController.handle);
ordemServicoRoutes.post("/procedimentos", ensureAuthenticated, createOrdemProcedimentosController.handle);


//Ordem Pecas
const listOrdemPecasController = new ListOrdemPecasController();
const createOrdemPecaController = new CreateOrdemPecaController();
const deleteOrdemPecaController = new DeleteOrdemPecaController();

ordemServicoRoutes.get("/pecas", ensureAuthenticated, listOrdemPecasController.handle)
ordemServicoRoutes.post("/pecas", ensureAuthenticated, createOrdemPecaController.handle)
ordemServicoRoutes.delete("/pecas/:id", ensureAuthenticated, deleteOrdemPecaController.handle)

//Status Ordem
const listStatusOrdemController = new ListStatusOrdemController();

ordemServicoRoutes.get("/status/:id", ensureAuthenticated, listStatusOrdemController.handle)

export { ordemServicoRoutes };