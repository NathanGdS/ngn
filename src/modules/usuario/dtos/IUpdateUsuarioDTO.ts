interface IUpdateUsuarioDTO {
    name: string,
    rg: string,
    cpf: string,
    birthDate: Date,
    email: string,
    isAdmin: boolean
}

export { IUpdateUsuarioDTO };