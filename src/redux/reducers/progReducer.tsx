import React from "react";
// import { CREATE_PROGRAM_REQUEST, CREATE_PROGRAM_SUCCESS, CREATE_PROGRAM_FAIL, EDIT_FACULTY_REQUEST, EDIT_PROGRAM_SUCCESS } from "../constants/userConstants";

// export interface UserState{
//     loading?: boolean;
//     error?: boolean;
//     program: {
//         name?:string;
//         code?: number;
//         programType?: string;
//         department?: string;
//         degree?: string;
//     }
// }

// interface Action{
//     type: string;
//     payload?: string;
// }

// export const createAndEditProgramReducer = (state: UserState = {program: {}}, action:Action) => {
//     switch (action.type) {
//         case CREATE_PROGRAM_REQUEST:
//             return {
//                 loading: true, 
//             }
//         case CREATE_PROGRAM_SUCCESS:
//             return {
//                 loading: false,
//                 program: action.payload
//             }
//         case CREATE_PROGRAM_FAIL: 
//             return{
//                 loading: false,
//                 error: action.payload
//             }
//         case EDIT_FACULTY_REQUEST:
//             return{
//                 loading: true
                
//             }
//         case EDIT_PROGRAM_SUCCESS:
//             return{
//                 loading: true,
//                 program: action.payload
//             }
//         default:
//             return state;
//     }
// }

