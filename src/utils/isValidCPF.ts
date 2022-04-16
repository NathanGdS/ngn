export async function isValidCPF(cpf: string) {
    let sum = 0, remainder = 0

    async function digitValidation(cpf: string, length: number) {
        for (let index = 0; index <= length; index++)
            sum = sum + parseInt(cpf.substring(index - 1, index)) * ((length + 2) - index)

        remainder = (sum * 10) % 11

        if ((remainder == (10 || 11))) remainder = 0

        if (remainder != parseInt(cpf.substring(length, length + 1))) return false
    }
    
    if (typeof cpf != 'string') return false

    cpf = cpf.replace(/[\s.-]*/igm, '')

    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) return false

    await digitValidation(cpf, 9)
    await digitValidation(cpf, 10)

    return true
}