import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteClienteUseCase{
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) { }

    async execute(id: string): Promise<void> {
        const clienteExists = await this.clienteRepository.findById(id);

        if (!clienteExists) throw new AppError('Cliente not exists!');

        await this.clienteRepository.delete(id);
    }
    
}

export { DeleteClienteUseCase };