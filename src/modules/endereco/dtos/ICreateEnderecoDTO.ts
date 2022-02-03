interface ICreateEnderecoDTO {
    addCep: string;
    addStreet: string;
    addSupplement: string;
    addDistrict: string;
    addTown: string;
    addFU: string;
    userId?: string;
    customerId?: string;
}

export { ICreateEnderecoDTO };