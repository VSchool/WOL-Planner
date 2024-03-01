import React, { createContext, useState, ReactNode } from 'react';

interface UIContextType {
  displaySideBar: boolean;
  toggleSideBar: () => void;
}

export const UIContext = createContext<UIContextType>({ 
  displaySideBar: false, 
  toggleSideBar: () => {} 
});



export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [displaySideBar, setDisplaySideBar] = useState(false);

  const toggleSideBar = () => setDisplaySideBar(prev => !prev);

  return (
    <UIContext.Provider value={{ displaySideBar, toggleSideBar }}>
      {children}
    </UIContext.Provider>
  );
};
