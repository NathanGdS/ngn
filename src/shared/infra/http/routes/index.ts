import { Router } from "express";

import { automovelRoutes } from "./automovel.routes";
import { usuarioRoutes } from "./usuarios.routes";

const router = Router();

router.use("/automovel", automovelRoutes);
router.use("/usuarios", usuarioRoutes);
// router.use("/cliente", clienteRoutes);
// import { ListTipoAutomovelController } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelController";
// const listTipoAutomovelController = new ListTipoAutomovelController();

// /**
//  * @swagger
//  * /tipoautmovel:
//  *   get:
//  *     summary: Get Tipo Automoveis
//  *     description: Get all Tipo Automoveis
//  *     responses:
//  *       200:
//  *         description: Returns a mysterious string.
//  */
//  router.get("/automovel/tipo", listTipoAutomovelController.handle);

// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     summary: Retrieve a list of JSONPlaceholder users
//  *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
// */
// router.get('/', function(req, res) {
//     res.send({message: "ok"})
// });

export { router };