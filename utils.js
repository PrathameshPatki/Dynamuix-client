import { PriorityService } from "./service";

let map = [];

export function RegisterClick(name) {
    PriorityService.click(name).then(response => {
        console.log(response.status);
    })
}

export async function GetPriorities(callback){
    PriorityService.getPriorities(callback);
}

export {map};