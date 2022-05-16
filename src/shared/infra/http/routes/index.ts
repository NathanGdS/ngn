import { Router } from "express";

import { automovelRoutes } from "./automovel.routes";
import { usuarioRoutes } from "./usuarios.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { clienteRoutes } from "./clientes.routes";
import { ordemServicoRoutes } from "./ordemServico.routes";
import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { ChangePasswordController } from "@modules/accounts/useCases/changePassword/ChangePasswordController";

const router = Router();
const changePasswordController = new ChangePasswordController();

router.use("/automovel", automovelRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/login", authenticateRoutes);
router.patch("/changePassword/:id", ensureAuthenticated, changePasswordController.handle);
router.use("/clientes", clienteRoutes);
router.use("/os", ordemServicoRoutes);

export { router };
