import { Status } from "../../types/task";

export const data: { id: number; name: string; count: number; status: Status }[] = [
    {
        id: 1,
        name: "Набір \"Щенячий патруль хлопці\"",
        count: 25,
        status: "inProcess"
    },
    {
        id: 2,
        name: "Набір \"Бравл Старс\"",
        count: 20,
        status: "completed"
    },
    {
        id: 3,
        name: "Набір \"Майнкрафт\"",
        count: 18,
        status: "urgent"
    },

]