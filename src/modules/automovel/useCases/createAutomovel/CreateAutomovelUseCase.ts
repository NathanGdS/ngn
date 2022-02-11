import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateAutomovelUseCase {
    constructor(
        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository
    ) { }
    
    async execute({ plate, model, brand, color, year, renavam, customerId, typeId}: ICreateAutomovelDTO): Promise<Automovel> {

        // const clienteExists = await this.clienteRepository.findById(customerId);

        // if (!clienteExists) throw new AppError('Client not found!');

        const automovel = await this.automovelRepository.create({ plate, model, brand, color, year, renavam, customerId, typeId});
        
        return automovel;
    }
}

export { CreateAutomovelUseCase };