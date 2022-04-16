import { hashSync } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

const hashPassword = hashSync("admin", 8)
export const AdminUser = [
    {
        id: uuidV4(),
        cpf: "48402157823",
        name: "admin",
        email: "admin@admin.com.br",
        password: hashPassword,
        isAdmin: true,
        createdAt: new Date()
    }
]