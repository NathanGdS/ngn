import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { ensureAdmin } from "../middlewares/ensureAdmin";

// Ordem Procedimento Imports
import { ListOrdemProcedimentosController } from "@modules/ordemServico/useCases/ordemServicoProcedimento/listOrdemProcedimentos/ListOrdemProcedimentosController";
import { FindOneOrdemProcedimentoController } from "@modules/ordemServico/useCases/ordemServicoProcedimento/findOneOrdemProcedimento/FindOneOrdemProcedimentoController";
import { CreateOrdemProcedimentoController } from "@modules/ordemServico/useCases/ordemServicoProcedimento/createOrdemProcedimento/CreateOrdemProcedimentoController";
import { UpdateOrdemProcedimentoController } from "@modules/ordemServico/useCases/ordemServicoProcedimento/updateOrdemProcedimento/UpdateOrdemProcedimentoController";
import { DeleteOrdemProcedimentoController } from "@modules/ordemServico/useCases/ordemServicoProcedimento/deleteOrdemProcedimento/DeleteOrdemProcedimentoController";

// Ordem Peça Imports
import { ListOrdemPecasController } from "@modules/ordemServico/useCases/ordemServicoPeca/listOrdemPeca/ListOrdemPecasController";
import { FindOneOrdemPecaController } from "@modules/ordemServico/useCases/ordemServicoPeca/findOneOrdemPeca/FindOneOrdemPecaController";
import { CreateOrdemPecaController } from "@modules/ordemServico/useCases/ordemServicoPeca/createOrdemPeca/CreateOrdemPecaController";
import { UpdateOrdemPecaController } from "@modules/ordemServico/useCases/ordemServicoPeca/updateOrdemPeca/UpdateOrdemPecaController";
import { DeleteOrdemPecaController } from "@modules/ordemServico/useCases/ordemServicoPeca/deleteOrdemPeca/DeleteOrdemPecaController";

// Ordem Status Imports
import { ListStatusOrdemController } from "@modules/ordemServico/useCases/ordemServicoStatus/listStatusOrdem/ListStatusOrdemController";

// Ordem Serviço Imports
import { ListOrdemServicoController } from "@modules/ordemServico/useCases/ordemServico/listOrdemServico/ListOrdemServicoController";
import { CreateOrdemServicoController } from "@modules/ordemServico/useCases/ordemServico/createOrdemServico/CreateOrdemServicoController";
import { ListOneOrdemServicoController } from "@modules/ordemServico/useCases/ordemServico/listOneOrdemServico/ListOneOrdemServicoController";
import { UpdateStatusOrdemServicoController } from "@modules/ordemServico/useCases/ordemServico/updateStatusOrdemServico/UpdateStatusOrdemServicoController";
import { DeleteOrdemServicoController } from "@modules/ordemServico/useCases/ordemServico/deleteOrdemServico/DeleteOrdemServicoController";



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
const listOneOrdemServicoController = new ListOneOrdemServicoController();
const createOrdemServicoController = new CreateOrdemServicoController();
const updateStatusOrdemServicoController = new UpdateStatusOrdemServicoController();
const deleteOrdemServicoController = new DeleteOrdemServicoController();

ordemServicoRoutes.get('/', ensureAuthenticated, listOrdemServicoController.handle)
ordemServicoRoutes.get('/:id', ensureAuthenticated, listOneOrdemServicoController.handle)
ordemServicoRoutes.post('/', ensureAuthenticated, createOrdemServicoController.handle)
ordemServicoRoutes.patch('/status/:id', ensureAuthenticated, updateStatusOrdemServicoController.handle)
ordemServicoRoutes.delete('/:id', ensureAuthenticated, ensureAdmin, deleteOrdemServicoController.handle)

export { ordemServicoRoutes };