import React from "react";
// import { CREATE_FACULTY_FAIL, CREATE_FACULTY_SUCCESS, EDIT_FACULTY_SUCCESS,  } from "../constants/userConstants"
// import {ThunkAction, ThunkDispatch} from 'redux-thunk';
// import {AnyAction} from 'redux';
// import { RootState } from "../store";

// export const facultyAction = (department: string, id: number, phone: string, email: string, webpage: string, address: string, head_of_department: string) => 
// async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
//     try {
//         dispatch({
//             type: CREATE_FACULTY_SUCCESS
//         })
//         const response = await fetch('http://api.scola.ng/api/v1/programs', {
//             method: 'POST',
//             headers: {'contemt-Type': 'application.json'},
//             credentials: 'include',
//             body: JSON.stringify({
//                 department,
//                 id,
//                 phone, 
//                 email,
//                 webpage,
//                 address,
//                 head_of_department
//             }),
//         })

//         const data = await response.json();
//         const userData = {user: data.department}


//         dispatch({
//             type: CREATE_FACULTY_SUCCESS,
//             payload: userData
//         })
//         localStorage.setItem('faculty', JSON.stringify(userData))
//         //pass data to the reducer
    
//         dispatch({
//             type: EDIT_FACULTY_SUCCESS,
//         })

//         const editResponse = await fetch('http://api.scola.ng/api/v1/programs', {
//             method: 'POST',
//             headers: {'contemt-Type': 'application.json'},
//             credentials: 'include',
//             body: JSON.stringify({
//                 department,
//                 id,
//                 phone, 
//                 email,
//                 webpage,
//                 address,
//                 head_of_department
//             }),
//         })
//         const editData = await response.json();
//         const editFacultyData = {user: editData.department}


//         dispatch({
//             type: EDIT_FACULTY_SUCCESS,
//             payload: editFacultyData
//         })
//         localStorage.setItem('faculty', JSON.stringify(editFacultyData))

//     } catch (err) {
//         //user error
//         dispatch({
//             type: CREATE_FACULTY_FAIL,
//             payload: {/*error.response && error.response.data.message 
//             ? error.response.data.message 
//             : error.message*/}
//         })
//     }
// }