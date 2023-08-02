import { createStore ,AnyAction } from 'react-redux';

interface ThemeType {
    theme: string;
}

const initialState: ThemeType = { theme: 'light'}

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
