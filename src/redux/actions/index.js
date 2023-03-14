import { createAction } from "@reduxjs/toolkit";
import { ADD_ITEM,REMOVE_ITEM } from "./actionType";


export const addItem = createAction(ADD_ITEM)

export const removeItem = createAction(REMOVE_ITEM)


// export const addItem = (parameter)=>{
//     return(
//         {
//             type:ADD_ITEM,
//             payload:parameter
//         }
//     )
// }

// export const removeItem = (parameter)=>{
// return({
//     type:REMOVE_ITEM,
//     payload:parameter
// })
// }