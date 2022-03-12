import { Router } from "express";

import { CreateTipoAutomovelController } from "@modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelController";
import { ListTipoAutomovelController } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelController";
import { UpdateTipoAutomovelController } from "@modules/automovel/useCases/updateTipoAutomovel/UpdateTipoAutomovelController";
import { DeleteTipoAutomovelController } from "@modules/automovel/useCases/deleteTipoAutomovel/DeleteTipoAutomovelController";

import { CreateAutomovelController } from "@modules/automovel/useCases/createAutomovel/CreateAutomovelController";
import { ListAutomovelController } from "@modules/automovel/useCases/listAutomovel/ListAutomovelController";

const automovelRoutes = Router();

const createTipoAutomovelController = new CreateTipoAutomovelController();
const listTipoAutomovelController = new ListTipoAutomovelController();
const updateTipoAutomovelController = new UpdateTipoAutomovelController();
const deleteTipoAutomovelController = new DeleteTipoAutomovelController();

const createAutomovelController = new CreateAutomovelController();
const listAutomovelController = new ListAutomovelController();

automovelRoutes.post("/", createAutomovelController.handle);
automovelRoutes.get("/", listAutomovelController.handle);


/**
 * @swagger
 * /automovel/tipo:
 *  post:
 *   summary: Create a new Tipo Automovel
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        description:
 *         type: string
 *         description: The Tipo Usuario's description.
 *         example: SUV
 *   description: Create a new Tipo Automovel
 *   responses:
 *     201:
 *       description: Created.
 */
automovelRoutes.post("/tipo", createTipoAutomovelController.handle);
/**
 *  @swagger
 *  /automovel/tipo:
 *      get:
 *          summary: Get Tipo Automoveis
 *          description: Get all Tipo Automoveis
 *          responses:
 *              200:
 *                  description: Returns a mysterious string.
 */
automovelRoutes.get("/tipo", listTipoAutomovelController.handle);
automovelRoutes.patch("/tipo/:id", updateTipoAutomovelController.handle)
automovelRoutes.delete("/tipo/:id", deleteTipoAutomovelController.handle);




export { automovelRoutes }; 