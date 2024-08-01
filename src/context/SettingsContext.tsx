import { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextType {
  sortOption: string;
  rowsPerPage: number;
  setSortOption: (option: string) => void;
  setRowsPerPage: (rows: number) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [sortOption, setSortOption] = useState('date');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <SettingsContext.Provider value={{ sortOption, rowsPerPage, setSortOption, setRowsPerPage }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
