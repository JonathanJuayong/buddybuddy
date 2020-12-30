import { useState, createContext, Dispatch, SetStateAction, Context } from 'react';
import { DefaultState, defaultState } from './defaultState';

interface ContextType {
  context: DefaultState,
  setContext: Dispatch<SetStateAction<{}>>
}

export const GlobalContext: Context<ContextType | undefined> = createContext(undefined);

export const ContextProvider: React.FC = ({children}) => {
  const [context, setContext] = useState<DefaultState>(defaultState);
  return (
    <GlobalContext.Provider value={{context, setContext}}>
      {children}
    </GlobalContext.Provider>
  )
}