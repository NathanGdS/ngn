import { container } from "tsyringe";

import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";

// import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClienteRepositoryInMemory";
// import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";

container.registerSingleton<ITipoAutomovelRepository>(
    "TipoAutomovelRepository",
    TipoAutomovelRepositoryInMemory
);

container.registerSingleton<IAutomovelRepository>(
    "AutomovelRepository",
    AutomovelRepositoryInMemory
);

// container.registerSingleton<IClienteRepository>(
//     "ClienteRepository",
//     ClienteRepositoryInMemory
// );

