import { ADD, DELETE, EDIT, FIL } from "./types"

export const add = (newtask)=>{
    return { type : ADD , newtask}
}

export const effacer = (id)=>{
    return { type : DELETE , id}
}
export const edit = (id,newtask,newdone)=>{
    return { type : EDIT ,id, newtask, newdone}
}
export const fil=(isdone)=> {
    return {type : FIL, isdone}
}