import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteClienteUseCase {
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        this.clienteRepository.delete(id);
    }
}

export { DeleteClienteUseCase };