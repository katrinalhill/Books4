import React, { useState, useEffect, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

type Library = {
  name: string;
  address: string;
  books: string[];
  employees: string[];
  isOpen: boolean;
}[];

type LibraryContextType = {
  library: Library;
  setLibrary: Dispatch<SetStateAction<Library>>;
};

const defaultLibraryContext: LibraryContextType = {
  library: [],
  setLibrary: () => {},
};

type LibraryProviderProps = {
  children: ReactNode;
};

export const LibraryContext = createContext(defaultLibraryContext);

export const LibraryProvider = ({ children }: LibraryProviderProps) => {
  const [library, setLibrary] = useState<Library>([]);

  useEffect(() => {
    const fetchLibraryData = async () => {
      try {
        const response = await fetch('/library');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLibrary(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLibraryData();
  }, []);

  const libraryContextValue: LibraryContextType = {
    library,
    setLibrary,
  };
console.log(library)
  return (
    <LibraryContext.Provider value={libraryContextValue}>
      {children}
    </LibraryContext.Provider>
  );
};
