interface ICreateOrdemServicoProcDTO {  
    procSeq: number,
    procDescription: string,
    procUnitaryValue: number,
    procAmount: number,
    procTotalValue: number,
    orderId: string
}

export { ICreateOrdemServicoProcDTO };