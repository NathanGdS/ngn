import { container } from "tsyringe";

// import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { TipoAutomovelRepository } from "@modules/automovel/infra/typeorm/repositories/TipoAutomovelRepository";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

// import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { AutomovelRepository } from "@modules/automovel/infra/typeorm/repositories/AutomovelRepository";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";

// import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClienteRepositoryInMemory";
// import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";

container.registerSingleton<ITipoAutomovelRepository>(
    "TipoAutomovelRepository",
    TipoAutomovelRepository
);

container.registerSingleton<IAutomovelRepository>(
    "AutomovelRepository",
    AutomovelRepository
);

// container.registerSingleton<IClienteRepository>(
//     "ClienteRepository",
//     ClienteRepositoryInMemory
// );

