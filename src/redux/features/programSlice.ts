import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export interface FacultyState{
     loading?: boolean;
     error?: any;
     faculty: {
         name:string;
         id: number | string;
         code: number | string;
         type?: any;
         webpage?: any;
         address?: any;
         head_of_department?: any;
     }
}