import { Router } from "express";

import { automovelRoutes } from "./automovel.routes";
import { usuarioRoutes } from "./usuarios.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { clienteRoutes } from "./clientes.routes";
import { ordemServicoRoutes } from "./ordemServico.routes";

const router = Router();

router.use("/automovel", automovelRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/login", authenticateRoutes);
router.use("/clientes", clienteRoutes);
router.use("/os", ordemServicoRoutes);

export { router };
