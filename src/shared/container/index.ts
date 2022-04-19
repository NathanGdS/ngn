import { container } from "tsyringe";

// Tipo Automóvel
// import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { TipoAutomovelRepository } from "@modules/automovel/infra/typeorm/repositories/TipoAutomovelRepository";

// Automóvel
// import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { AutomovelRepository } from "@modules/automovel/infra/typeorm/repositories/AutomovelRepository";

// Usuário
// import { UsuarioRepositoryInMemory } from "@modules/accounts/repositories/In-memory/UsuariosRepositoryInMemory";
import { UsuarioRepository } from "@modules/accounts/infra/typeorm/repositories/UsuarioRepository";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";

// Cliente
// import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClienteRepositoryInMemory";
import { ClienteRepository } from "@modules/cliente/infra/typeorm/repositories/ClienteRepository";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";

// Status Ordem
// import { StatusOrdemRepositoryInMemory } from "@modules/ordemServico/repositories/In-memory/StatusOrdemRepositoryInMemory";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { StatusOrdemRepository } from "@modules/ordemServico/infra/typeorm/repositories/StatusOrdemRepository";

// Ordem Procedimentos
import { OrdemProcedimentosRepository } from "@modules/ordemServico/infra/typeorm/repositories/OrdemProcedimentosRepository";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";

// Ordem Pecas
// import { OrdemPecasRepositoryInMemory } from "@modules/ordemServico/repositories/In-memory/OrdemPecasRepositoryInMemory";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { OrdemPecasRepository } from "@modules/ordemServico/infra/typeorm/repositories/OrdemPecasRepository";

// Ordem Serviço
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { OrdemServicoRepository } from "@modules/ordemServico/infra/typeorm/repositories/OrdemServicoRepository";

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

container.registerSingleton<IStatusOrdemRepository>(
    "StatusOrdemRepository",
    StatusOrdemRepository
);

container.registerSingleton<IOrdemProcedimentosRepository>(
    "OrdemProcedimentosRepository",
    OrdemProcedimentosRepository
);

container.registerSingleton<IOrdemPecasRepository>(
    "OrdemPecasRepository",
    OrdemPecasRepository
);

container.registerSingleton<IOrdemServicoRepository>(
    "OrdemServicoRepository",
    OrdemServicoRepository
);