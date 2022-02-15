import { Router } from "express";

import { automovelRoutes } from "./automovel.routes";
import { clienteRoutes } from "./clientes.routes";
import { usuarioRoutes } from "./usuarios.routes";

const router = Router();

router.use("/automovel", automovelRoutes);
router.use("/cliente", clienteRoutes);
router.use("/usuario", usuarioRoutes);

export { router };