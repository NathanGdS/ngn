import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteOrdemPecaUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private ordemPecasRepository: IOrdemPecasRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        this.ordemPecasRepository.delete(id);
    }
}

export { DeleteOrdemPecaUseCase };