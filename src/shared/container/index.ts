import { container } from "tsyringe";

import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";

import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClienteRepositoryInMemory";


container.registerSingleton<ITipoAutomovelRepository>(
    "TipoAutomovelRepository",
    TipoAutomovelRepositoryInMemory
);

container.registerSingleton<IAutomovelRepository>(
    "AutomovelRepository",
    AutomovelRepositoryInMemory
);

container.registerSingleton<IClienteRepository>(
    "ClienteRepository",
    ClienteRepositoryInMemory
);