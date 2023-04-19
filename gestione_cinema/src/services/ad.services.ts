import { Film } from "../interfaces/film.interface"
import { Response } from "../interfaces/response.interface"

export function getAll(): Promise<Film[]>{
    const requestOption = {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    }

    return fetch("https://deploy.braintech.app/cinema/cinema.php?access_key=1dada2bece5869c689bf638a31b7f809", ).then(res => res.json())
}


