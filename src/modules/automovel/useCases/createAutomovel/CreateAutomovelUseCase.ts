import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";

class CreateAutomovelUseCase {
    constructor(
        private automovelRepository: IAutomovelRepository
    ) { }
    
    async execute({ autoPlate, autoModel, autoBrand, autoColor, autoYear, autoRenavam, customerId, autoTypeId}: ICreateAutomovelDTO): Promise<Automovel> {

        // const clienteExists = await this.clienteRepository.findById(customerId);

        // if (!clienteExists) throw new AppError('Client not found!');

        const automovel = await this.automovelRepository.create({
                autoPlate, autoModel, autoBrand, autoColor, autoYear, autoRenavam, customerId, autoTypeId
            });
        
        return automovel;
    }
}

export { CreateAutomovelUseCase };