import React from "react";

// import { CREATE_PROGRAM_FAIL, CREATE_PROGRAM_SUCCESS, EDIT_PROGRAM_SUCCESS,  } from "../constants/userConstants"
// import {ThunkAction, ThunkDispatch} from 'redux-thunk';
// import {AnyAction} from 'redux';
// import { RootState } from "../store";

// export const programAction = (name: string, code: number, programType: string, department: string, degree: string) => 
// async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
//     try {
//         dispatch({
//             type: CREATE_PROGRAM_SUCCESS
//         })
//         const response = await fetch('http://api.scola.ng/api/v1/programs', {
//             method: 'POST',
//             headers: {'contemt-Type': 'application.json'},
//             credentials: 'include',
//             body: JSON.stringify({
//                 name,
//                 code,
//                 programType, 
//                 department,
//                 degree
//             }),
//         })

//         const data = await response.json();
//         const userData = {user: data.department}


//         dispatch({
//             type: CREATE_PROGRAM_SUCCESS,
//             payload: userData
//         })
//         localStorage.setItem('program', JSON.stringify(userData))
//         //pass data to the reducer
    
//         dispatch({
//             type: EDIT_PROGRAM_SUCCESS,
//         })

//         const editResponse = await fetch('http://api.scola.ng/api/v1/programs', {
//             method: 'POST',
//             headers: {'contemt-Type': 'application.json'},
//             credentials: 'include',
//             body: JSON.stringify({
//                 name,
//                 code,
//                 programType, 
//                 department,
//                 degree
//             }),
//         })
//         const editData = await response.json();
//         const editProgData = {user: editData.department}


//         dispatch({
//             type: EDIT_PROGRAM_SUCCESS,
//             payload: userData
//         })
//         localStorage.setItem('program', JSON.stringify(userData))

//     } catch (err) {
//         //user error
//         dispatch({
//             type: CREATE_PROGRAM_FAIL,
//             payload: {/*error.response && error.response.data.message 
//             ? error.response.data.message 
//             : error.message*/}
//         })
//     }
// }