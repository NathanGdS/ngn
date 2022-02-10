import { container } from "tsyringe";

import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

container.registerSingleton<ITipoAutomovelRepository>(
    "TipoAutomovelRepository",
    TipoAutomovelRepositoryInMemory
);