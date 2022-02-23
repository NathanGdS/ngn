import { Router } from "express";

import { automovelRoutes } from "./automovel.routes";
import { clienteRoutes } from "./clientes.routes";

const router = Router();

router.use("/automovel", automovelRoutes);
router.use("/cliente", clienteRoutes);


export { router };