import { createStore ,AnyAction } from 'redux';

interface ThemeType {
    theme: string;
}

//Initial state for the Store
const initialState: ThemeType = { theme: 'light'}

//Reducer for Theme store and state 
const themeReducer = (state: ThemeType = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}

//store for theme reducer
const store = createStore(themeReducer);

//actions for the Store
export const setTheme = (theme: string) => ({
    type: 'setTheme',
    payload: theme
})

export default store;