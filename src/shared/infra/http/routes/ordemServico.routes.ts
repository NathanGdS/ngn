import { Router } from "express";

// Ordem Procedimento Imports
import { ListOrdemProcedimentosController } from "@modules/ordemServico/useCases/listOrdemProcedimentos/ListOrdemProcedimentosController";
import { FindOneOrdemProcedimentoController } from "@modules/ordemServico/useCases/findOneOrdemProcedimento/FindOneOrdemProcedimentoController";
import { CreateOrdemProcedimentoController } from "@modules/ordemServico/useCases/createOrdemProcedimento/CreateOrdemProcedimentoController";
import { UpdateOrdemProcedimentoController } from "@modules/ordemServico/useCases/updateOrdemProcedimento/UpdateOrdemProcedimentoController";
import { DeleteOrdemProcedimentoController } from "@modules/ordemServico/useCases/deleteOrdemProcedimento/DeleteOrdemProcedimentoController";


import { ListOrdemPecasController } from "@modules/ordemServico/useCases/listOrdemPeca/ListOrdemPecasController";
import { CreateOrdemPecaController } from "@modules/ordemServico/useCases/createOrdemPeca/CreateOrdemPecaController";
import { UpdateOrdemPecaUseCase } from "@modules/ordemServico/useCases/updateOrdemPeca/UpdateOrdemPecaUseCase";
import { DeleteOrdemPecaController } from "@modules/ordemServico/useCases/deleteOrdemPeca/DeleteOrdemPecaController";

import { ListStatusOrdemController } from "@modules/ordemServico/useCases/listStatusOrdem/ListStatusOrdemController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { UpdateOrdemPecaController } from "@modules/ordemServico/useCases/updateOrdemPeca/UpdateOrdemPecaController";

const ordemServicoRoutes = Router();

//Ordem Procedimentos
const listOrdemProcedimentosController = new ListOrdemProcedimentosController();
const findOneOrdemProcedimentosController = new FindOneOrdemProcedimentoController();
const createOrdemProcedimentosController = new CreateOrdemProcedimentoController();
const updateOrdemProcedimentosController = new UpdateOrdemProcedimentoController();
const deleteOrdemProcedimentosController = new DeleteOrdemProcedimentoController();

ordemServicoRoutes.get("/procedimentos", ensureAuthenticated, listOrdemProcedimentosController.handle);
ordemServicoRoutes.get("/procedimentos/:id", ensureAuthenticated, findOneOrdemProcedimentosController.handle);
ordemServicoRoutes.post("/procedimentos", ensureAuthenticated, createOrdemProcedimentosController.handle);
ordemServicoRoutes.put("/procedimentos/:id", ensureAuthenticated, updateOrdemProcedimentosController.handle);
ordemServicoRoutes.delete("/procedimentos/:id", ensureAuthenticated, deleteOrdemProcedimentosController.handle);



//Ordem Pecas
const listOrdemPecasController = new ListOrdemPecasController();
const createOrdemPecaController = new CreateOrdemPecaController();
const updateOrdemPecasController = new UpdateOrdemPecaController();
const deleteOrdemPecaController = new DeleteOrdemPecaController();

ordemServicoRoutes.get("/pecas", ensureAuthenticated, listOrdemPecasController.handle)
ordemServicoRoutes.post("/pecas", ensureAuthenticated, createOrdemPecaController.handle)
ordemServicoRoutes.put("/pecas/:id", ensureAuthenticated, updateOrdemPecasController.handle)
ordemServicoRoutes.delete("/pecas/:id", ensureAuthenticated, deleteOrdemPecaController.handle)

//Status Ordem
const listStatusOrdemController = new ListStatusOrdemController();

ordemServicoRoutes.get("/status/:id", ensureAuthenticated, listStatusOrdemController.handle)

export { ordemServicoRoutes };