import { container } from "tsyringe";

import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";

import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClienteRepositoryInMemory";

import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { UsuarioRepositoryInMemory } from "@modules/usuario/repositories/in-memory/UsuarioRepositoryInMemory";

import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
import { EnderecoRepositoryInMemory } from "@modules/endereco/repositories/in-memory/EnderecoRepositoryInMemory";

import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { TelefoneRepositoryInMemory } from "@modules/telefone/repositories/in-memory/TelefoneRepositoryInMemory";


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

container.registerSingleton<IUsuarioRepository>(
    "UsuarioRepository",
    UsuarioRepositoryInMemory
);

container.registerSingleton<IEnderecoRepository>(
    "EnderecoRepository",
    EnderecoRepositoryInMemory
);

container.registerSingleton<ITelefoneRepository>(
    "TelefoneRepository",
    TelefoneRepositoryInMemory
);