import {createReducer} from "@ngrx/store";
import {Book} from "./book";
export const initialState:ReadonlyArray<Book>=[]
export const booksReducer=createReducer(initialState)
