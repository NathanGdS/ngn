import { v4 as uuidV4 } from "uuid";

export const StatusOrdemSeed = [
    {
        id: uuidV4(),
        status_number: 1,
        description: "Aberta",
        created_at: new Date()
    },
    {
        id: uuidV4(),
        status_number: 2,
        description: "Aprovada",
        created_at: new Date()
    }, 
    {
        id: uuidV4(),
        status_number: 3,
        description: "Fila de Espera",
        created_at: new Date()
    },
    {
        id: uuidV4(),
        status_number: 4,
        description: "Em Andamento",
        created_at: new Date()
    },
    {
        id: uuidV4(),
        status_number: 5,
        description: "Finalizada",
        created_at: new Date()
    },
    {
        id: uuidV4(),
        status_number: 6,
        description: "Reaberta",
        created_at: new Date()
    }, 
    {
        id: uuidV4(),
        status_number: 7,
        description: "Cancelada",
        created_at: new Date()
    }
]