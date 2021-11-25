import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export interface FacultyState{
     loading?: boolean;
     error?: any;
     faculty: {
         name?:any;
         id?: any;
         code?: any;
         type?: any;
         webpage?: any;
         address?: any;
         head_of_department?: any;
     }
}