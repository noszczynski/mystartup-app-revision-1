import React, { FC, useContext, useState } from 'react';

type ContextProps = {
  isMenuOpen: boolean,
  toggleTheme: any,
  toggleMenuOpen: any,
};

const initialState = {
  isMenuOpen: false,
};

const NavbarContext = React.createContext<Partial<ContextProps>>(initialState);

const NavbarContextProvider: FC = ({children}) => {
  const [state, setState] = useState(initialState);

  const toggleMenuOpen = (): any => {
    setState((prevState) => {
      return ({...prevState, isMenuOpen: !prevState.isMenuOpen  });
    });
  };

  return (
    <NavbarContext.Provider value={{
      isMenuOpen: state.isMenuOpen,
      toggleMenuOpen,
    }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export { NavbarContext, NavbarContextProvider, useNavbarContext };
