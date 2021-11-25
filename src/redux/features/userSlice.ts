import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { authenticate } from "../services/authentionservice";
import { setTokens } from "../services/localstorage";
import { RootState } from "../store";
import { history } from "../helpers/history";


export interface UserState{
    isProcessingRequest?: boolean;
    accessToken?: string
}


const initialState: UserState = {
    isProcessingRequest: false
}


export const userLoginSlice = createSlice({
    name: "userLogin",
    initialState,
    reducers:{
        USER_LOGIN_REQUEST: (state) => {
            return{
                ...state,
                isProcessingRequest: true,
            };
        },
        USER_LOGIN_SUCCESS: (state, action: PayloadAction<any>) => {
            return{
                ...state, 
                isProcessingRequest: false,
            }
        },
        USER_LOGIN_FAIL: (state, action: PayloadAction<any>) =>{
            return{
                ...state, 
                isProcessingRequest: false
            }
        },
        USER_LOGOUT: (state, action: PayloadAction<string>) => {
            return state;
        }
    }
})

export const authenticateUser= (userData: any) => async (dispatch: any) => {
    try{
        const authData = await authenticate(
            userData
        );
        setTokens(authData.data);
        dispatch(USER_LOGIN_SUCCESS(authData.data));
        history.push('/faculties')
    } catch(err:any){
        dispatch(Error(err));
    }
}

export const {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT} = userLoginSlice.actions
export const selectAuthentication = (state: RootState) => state.userLogin
export const authenticationReducer = userLoginSlice.reducer

export const logoutUser: any = async (dispatch: Dispatch<AnyAction>) => {
    localStorage.removeItem('userInfo')
    await fetch('http://api.scola.ng/api/v1/logout', {
            method: 'POST',
            headers: {'contemt-Type': 'application.json'},
            credentials: 'include'
    })

}
