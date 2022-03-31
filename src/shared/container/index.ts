import { container } from "tsyringe";

// import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { TipoAutomovelRepository } from "@modules/automovel/infra/typeorm/repositories/TipoAutomovelRepository";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

// import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { AutomovelRepository } from "@modules/automovel/infra/typeorm/repositories/AutomovelRepository";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";

// import { UsuarioRepositoryInMemory } from "@modules/accounts/repositories/In-memory/UsuariosRepositoryInMemory";
import { UsuarioRepository } from "@modules/accounts/infra/typeorm/repositories/UsuarioRepository";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";

// import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClienteRepositoryInMemory";
import { ClienteRepository } from "@modules/cliente/infra/typeorm/repositories/ClienteRepository";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";

// import { TelefoneRepositoryInMemory } from "@modules/telefone/repositories/In-Memory/TelefoneRepositoryInMemory";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { TelefoneRepository } from "@modules/telefone/infra/typeorm/repositories/TelefoneRepository";

// import { StatusOrdemRepositoryInMemory } from "@modules/ordemServico/repositories/In-memory/StatusOrdemRepositoryInMemory";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { StatusOrdemRepository } from "@modules/ordemServico/infra/typeorm/repositories/StatusOrdemRepository";

// import { EnderecoRepositoryInMemory } from "@modules/endereco/repositories/In-memory/EnderecoRepositoryInMemory";
import { EnderecoRepository } from "@modules/endereco/infra/typeorm/repositories/EnderecoRepository";
import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";

container.registerSingleton<ITipoAutomovelRepository>(
    "TipoAutomovelRepository",
    TipoAutomovelRepository
);

container.registerSingleton<IAutomovelRepository>(
    "AutomovelRepository",
    AutomovelRepository
);

container.registerSingleton<IUsuarioRepository>(
    "UsuarioRepository",
    UsuarioRepository
);

container.registerSingleton<IClienteRepository>(
    "ClienteRepository",
    ClienteRepository
);

 container.registerSingleton<ITelefoneRepository>(
     "TelefoneRepository",
     TelefoneRepository
 );

container.registerSingleton<IEnderecoRepository>(
    "EnderecoRepository",
    EnderecoRepository
);

container.registerSingleton<IStatusOrdemRepository>(
    "StatusOrdemRepository",
    StatusOrdemRepository
);