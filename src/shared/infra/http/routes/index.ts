import { Router } from "express";

import { automovelRoutes } from "./automovel.routes";

const router = Router();

router.use("/automovel", automovelRoutes);

export { router };