interface IUpdateUsuarioDTO {
    id: string;
    name: string;
    password: string;
    cpf: string;
    email: string;
    isAdmin: boolean;
}

export { IUpdateUsuarioDTO };