import { ICreateOrdemServicoDTO } from "@modules/ordemServico/dtos/ICreateOrdemServicoDTO";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { getRepository, Repository } from "typeorm";
import { OrdemServico } from "../entities/OrdemServico";
import { StatusOrdem } from "../entities/StatusOrdem";

class OrdemServicoRepository implements IOrdemServicoRepository {
    private repository: Repository<OrdemServico>;
    
    constructor() {
        this.repository = getRepository(OrdemServico);
    }
    
    async findAll(): Promise<OrdemServico[]> {
        return this.repository.find();
    }

    async findByNumber(number: number): Promise<OrdemServico> {
        return this.repository.findOne({
            where: { statusNumber: number }
        });
    }

    async findByAutomovelId(id: string): Promise<OrdemServico[]> {
        return this.repository.find({ automovelId: id });
    }

    async findById(id: string): Promise<OrdemServico> {
        return this.repository.findOne({ id });
    }

    async findByDescription(descricao: string): Promise<OrdemServico> {
        return this.repository.findOne({ descricao });
    }

    async create({
        automovelId,
        descricao,
    }: ICreateOrdemServicoDTO): Promise<OrdemServico> {
        const os =  this.repository.create({
            automovelId,
            descricao,
            finished_at: null
        });

        await this.repository.save(os);
        return os;

    }

    delete(id: string): void {
        this.repository.delete({ id });
    }

    async updateStatus(id: string, statusId: string): Promise<OrdemServico> { 
        const statusOrdem = await getRepository(StatusOrdem).findOne({ id: statusId });

        const query = this.repository.
            createQueryBuilder()
            .update()
            .set({ statusId })
        
        if (statusOrdem.statusNumber === 5) {
            query.set({finished_at: new Date()})
        }

        await query.where("id = :id")
            .setParameters({ id })
            .execute()
        
        return await this.findById(id)
    }
    
}

export { OrdemServicoRepository };