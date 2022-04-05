interface ICreateOrdemProcedimentosDTO {
    sequencia: number,
    descricao: string,
    valor_unitario: number,
    quantidade: number,
    valor_total: number
}

export { ICreateOrdemProcedimentosDTO };