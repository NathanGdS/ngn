interface IUpdateEnderecoDTO {
    id: string;
    cep: string;
    street: string;
    number: number;
    supplement: string;
    district: string;
    town: string;
    uf: string;
}

export { IUpdateEnderecoDTO };