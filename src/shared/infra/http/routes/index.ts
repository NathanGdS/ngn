import { Router } from "express";

import { automovelRoutes } from "./automovel.routes";
import { usuarioRoutes } from "./usuarios.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { clienteRoutes } from "./clientes.routes";

const router = Router();

router.use("/automovel", automovelRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/login", authenticateRoutes);
router.use("/clientes", clienteRoutes);

export { router };
