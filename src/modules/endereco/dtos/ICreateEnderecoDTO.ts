interface ICreateEnderecoDTO {
    cep: string;
    street: string;
    number: number;
    supplement: string;
    district: string;
    town: string;
    uf: string;
    customerId?: string;
    userId?: string;
}

export { ICreateEnderecoDTO };