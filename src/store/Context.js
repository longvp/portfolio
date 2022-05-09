import { createContext, useReducer } from 'react'

export const themeContext = createContext()

const initialState = {
    darkMode: JSON.parse(localStorage.getItem('dark_mode')) || false
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            let darkMode = !state.darkMode
            localStorage.setItem('dark_mode', JSON.stringify(darkMode))
            return {
                ...state,
                darkMode
            }
        default:
            return state
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)
    return (
        <themeContext.Provider value={[state, dispatch]}>
            {props.children}
        </themeContext.Provider>
    )
}