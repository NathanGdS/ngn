import { container } from "tsyringe";

import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";



container.registerSingleton<ITipoAutomovelRepository>(
    "TipoAutomovelRepository",
    TipoAutomovelRepositoryInMemory
);

container.registerSingleton<IAutomovelRepository>(
    "AutomovelRepository",
    AutomovelRepositoryInMemory
);