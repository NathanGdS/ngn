import { ICreateOrdemServicoDTO } from "@modules/ordemServico/dtos/ICreateOrdemServicoDTO";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { getRepository, Repository } from "typeorm";
import { OrdemServico } from "../entities/OrdemServico";

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
        await this.repository.
            createQueryBuilder()
            .update()
            .set({ statusId })
            .where("id =:id")
            .setParameters({ id })
            .execute()
        
        return await this.findById(id)
    }
}

export { OrdemServicoRepository };