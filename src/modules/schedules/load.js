import { scheduleFetchByDay } from "../../services/schedules-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")
export async function schedulesDay(){
    // Obtém a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})

    // Renderiza as horas disponíveis
    hoursLoad({date})
}
