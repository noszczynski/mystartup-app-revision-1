import React, { FC, useContext, useState } from 'react';
import { THEME } from 'utils/constants';

type ContextProps = {
  toggleTheme: any,
  theme: string,
}

const initialState = {
  theme: THEME.LIGHT,
}

const ThemeContext = React.createContext<Partial<ContextProps>>(initialState)

const ThemeContextProvider: FC = ({children}) => {
  const [theme, setTheme] = useState(initialState.theme)

  const toggleTheme = (): any => {
    setTheme((prevTheme) => prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export { ThemeContext, ThemeContextProvider, useThemeContext }
