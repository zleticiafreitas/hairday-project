import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedules-new.js";

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()
    
    try {
        // Recupera o nome do cliente
        const name = clientName.value.trim()
        if(!name){
            return alert("Informe o nome do cliente!")
        }

        // Recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert("Selecione o horário.")
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
    }
}