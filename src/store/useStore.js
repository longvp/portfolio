import { themeContext } from './Context'
import { useContext } from 'react'

export const useStore = () => {
    const [state, dispatch] = useContext(themeContext)
    return [state, dispatch]
}
