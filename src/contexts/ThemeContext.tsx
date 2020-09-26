import React, { FC, useContext, useEffect, useState } from 'react';
import { THEME } from 'utils/constants';
import themeStorage from '../storage/themeStorage';

type ContextProps = {
  toggleTheme: any,
  theme: string,
}

const initialState = {
  theme: themeStorage.get() || THEME.LIGHT,
}

const ThemeContext = React.createContext<Partial<ContextProps>>(initialState)

const ThemeContextProvider: FC = ({children}) => {
  const [theme, setTheme] = useState(initialState.theme)

  const toggleTheme = (): void => {
    setTheme((prevTheme) => prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  }

  const init = () => {
    // set as user preferences when ready
    const storageTheme = themeStorage.get()
    if (storageTheme) {
      setTheme(storageTheme)
    } else {
      setTheme(THEME.LIGHT)
    }
  };

  const setThemeToStorage = () => {
    themeStorage.set(theme)
  }

  useEffect(init, [])
  useEffect(setThemeToStorage, [theme])

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
