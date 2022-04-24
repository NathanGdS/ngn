import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateAutomovelUseCase {
    constructor(
        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository,
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository,
        @inject("TipoAutomovelRepository")
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) { }
    
    async execute({ plate, model, brand, color, year, renavam, typeId, customerId}: ICreateAutomovelDTO): Promise<Automovel> {

        const clienteExists = await this.clienteRepository.findById(customerId);
        if (!clienteExists) throw new AppError('Cliente não existe!');

        const tipoAutomovelExists = await this.tipoAutomovelRepository.findById(typeId);
        if (!tipoAutomovelExists) throw new AppError('Tipo Automóvel não existe!');

        const renavamExists = await this.automovelRepository.findByRenavam(renavam);
        if (renavamExists) throw new AppError('Renavam do automóvel já existe!')

        const automovel = await this.automovelRepository.create({ plate, model, brand, color, year, renavam, typeId, customerId});
        
        return automovel;
    }
}

export { CreateAutomovelUseCase };