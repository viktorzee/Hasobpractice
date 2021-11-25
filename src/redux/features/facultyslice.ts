import { createSlice } from '@reduxjs/toolkit'

// export interface FacultyState{
//     loading?: boolean;
//     error?: any;
//     faculty: {
//         department?:any;
//         id?: any;
//         phone?: any;
//         email?: any;
//         webpage?: any;
//         address?: any;
//         head_of_department?: any;
//     }
// }

// interface Action{
//     type: string;
//     payload?: string;
// }

// const initialState:FacultyState = {
//     faculty: {
//         department: undefined,
//         id: undefined,
//         phone: undefined,
//         email: undefined,
//         webpage: undefined,
//         address: undefined,
//         head_of_department: undefined
//     }
// }

// export const addNewFaculty = createSlice({
//     name: "addNewFaculty",
//     initialState,
//     reducers:{
//         CREATE_FACULTY_REQUEST: (state: FacultyState, action: Action) => {
//             state.loading = false;
//         },
//         CREATE_FACULTY_SUCCESS: (state: FacultyState, action: Action) => {
//             state.loading = false
//             state.faculty = action.payload
//         },
//         CREATE_FACULTY_FAIL: (state: FacultyState, action:Action) =>{
//             state.loading  = false
//             state.error = action.payload;
//         }
        
//     }
// })

// export const {CREATE_FACULTY_REQUEST, CREATE_FACULTY_SUCCESS, CREATE_FACULTY_FAIL} = addNewFaculty.actions

// export default addNewFaculty.reducer