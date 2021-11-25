import React from "react";
// export interface UserState{
//     loading?: boolean;
//     error?: boolean;
//     faculty: {
//         department?:string;
//         id?: number;
//         phone?: number;
//         email?: string;
//         webpage?: string;
//         address?: string;
//         head_of_department?: string;
//     }
// }

// interface Action{
//     type: string;
//     payload?: string;
// }

// export const createAndEditFacultyReducer = (state: UserState = {faculty: {}}, action:Action) => {
//     switch (action.type) {
//         case CREATE_FACULTY_REQUEST:
//             return {
//                 loading: true, 
//             }
//         case CREATE_FACULTY_SUCCESS:
//             return {
//                 loading: false,
//                 faculty: action.payload
//             }
//         case CREATE_FACULTY_FAIL: 
//             return{
//                 loading: false,
//                 error: action.payload
//             }
//         default:
//             return state;
//     }
// }

