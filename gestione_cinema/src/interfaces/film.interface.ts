import { NavigateFunction } from "react-router-dom";
import { Day } from "./day.interface";


export interface Film {
    title: string,
    OriginalTitle:string,
    Description: string,
    Actors: string,
    Director: string,
    Picture: string,
    Days: Day[],   
    navigate: NavigateFunction
}