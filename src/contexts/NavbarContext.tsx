import React, { FC, useContext, useState } from 'react';
import { THEME } from 'utils/constants';

type ContextProps = {
  theme: string,
  isMenuOpen: boolean,
  toggleTheme: any,
  toggleMenuOpen: any,
}

const initialState = {
  theme: THEME.LIGHT,
  isMenuOpen: false,
}

const NavbarContext = React.createContext<Partial<ContextProps>>(initialState)

const NavbarContextProvider: FC = ({children}) => {
  const [state, setState] = useState(initialState)

  const toggleTheme = (): any => {
    setState((prevState) => {
      return ({...prevState, theme: prevState.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT })
    })
  }

  const toggleMenuOpen = (): any => {
    setState((prevState) => {
      return ({...prevState, isMenuOpen: !prevState.isMenuOpen  })
    })
  }

  return (
    <NavbarContext.Provider value={{
      theme: state.theme,
      isMenuOpen: state.isMenuOpen,
      toggleTheme,
      toggleMenuOpen,
    }}>
      {children}
    </NavbarContext.Provider>
  )
}

const useNavbarContext = () => {
  return useContext(NavbarContext)
}

export { NavbarContext, NavbarContextProvider, useNavbarContext }
