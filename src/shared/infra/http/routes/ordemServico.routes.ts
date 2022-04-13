import { Router } from "express";

// Ordem Procedimento Imports
import { ListOrdemProcedimentosController } from "@modules/ordemServico/useCases/listOrdemProcedimentos/ListOrdemProcedimentosController";
import { FindOneOrdemProcedimentoController } from "@modules/ordemServico/useCases/findOneOrdemProcedimento/FindOneOrdemProcedimentoController";
import { CreateOrdemProcedimentoController } from "@modules/ordemServico/useCases/createOrdemProcedimento/CreateOrdemProcedimentoController";
import { UpdateOrdemProcedimentoController } from "@modules/ordemServico/useCases/updateOrdemProcedimento/UpdateOrdemProcedimentoController";
import { DeleteOrdemProcedimentoController } from "@modules/ordemServico/useCases/deleteOrdemProcedimento/DeleteOrdemProcedimentoController";

// Ordem Peça Imports
import { ListOrdemPecasController } from "@modules/ordemServico/useCases/listOrdemPeca/ListOrdemPecasController";
import { FindOneOrdemPecaController } from "@modules/ordemServico/useCases/findOneOrdemPeca/FindOneOrdemPecaController";
import { CreateOrdemPecaController } from "@modules/ordemServico/useCases/createOrdemPeca/CreateOrdemPecaController";
import { UpdateOrdemPecaController } from "@modules/ordemServico/useCases/updateOrdemPeca/UpdateOrdemPecaController";
import { DeleteOrdemPecaController } from "@modules/ordemServico/useCases/deleteOrdemPeca/DeleteOrdemPecaController";

// Ordem Status Imports
import { ListStatusOrdemController } from "@modules/ordemServico/useCases/listStatusOrdem/ListStatusOrdemController";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { ListOrdemServicoController } from "@modules/ordemServico/useCases/ordemServico/listOrdemServico/ListOrdemServicoController";
import { CreateOrdemServicoController } from "@modules/ordemServico/useCases/ordemServico/createOrdemServico/CreateOrdemServicoController";


const ordemServicoRoutes = Router();

//Ordem Procedimentos
const listOrdemProcedimentosController = new ListOrdemProcedimentosController();
const findOneOrdemProcedimentoController = new FindOneOrdemProcedimentoController();
const createOrdemProcedimentosController = new CreateOrdemProcedimentoController();
const updateOrdemProcedimentosController = new UpdateOrdemProcedimentoController();
const deleteOrdemProcedimentosController = new DeleteOrdemProcedimentoController();

ordemServicoRoutes.get("/procedimentos", ensureAuthenticated, listOrdemProcedimentosController.handle);
ordemServicoRoutes.get("/procedimentos/:id", ensureAuthenticated, findOneOrdemProcedimentoController.handle);
ordemServicoRoutes.post("/procedimentos", ensureAuthenticated, createOrdemProcedimentosController.handle);
ordemServicoRoutes.put("/procedimentos/:id", ensureAuthenticated, updateOrdemProcedimentosController.handle);
ordemServicoRoutes.delete("/procedimentos/:id", ensureAuthenticated, deleteOrdemProcedimentosController.handle);



//Ordem Pecas
const listOrdemPecasController = new ListOrdemPecasController();
const findOneOrdemPecaController = new FindOneOrdemPecaController();
const createOrdemPecaController = new CreateOrdemPecaController();
const updateOrdemPecasController = new UpdateOrdemPecaController();
const deleteOrdemPecaController = new DeleteOrdemPecaController();

ordemServicoRoutes.get("/pecas", ensureAuthenticated, listOrdemPecasController.handle)
ordemServicoRoutes.get("/pecas/:id", ensureAuthenticated, findOneOrdemPecaController.handle)
ordemServicoRoutes.post("/pecas", ensureAuthenticated, createOrdemPecaController.handle)
ordemServicoRoutes.put("/pecas/:id", ensureAuthenticated, updateOrdemPecasController.handle)
ordemServicoRoutes.delete("/pecas/:id", ensureAuthenticated, deleteOrdemPecaController.handle)

//Status Ordem
const listStatusOrdemController = new ListStatusOrdemController();

ordemServicoRoutes.get("/status", ensureAuthenticated, listStatusOrdemController.handle)


// Ordem Servico
const listOrdemServicoController = new ListOrdemServicoController();
const createOrdemServicoController = new CreateOrdemServicoController();

ordemServicoRoutes.get('/', ensureAuthenticated, listOrdemServicoController.handle)
ordemServicoRoutes.post('/', ensureAuthenticated, createOrdemServicoController.handle)

export { ordemServicoRoutes };