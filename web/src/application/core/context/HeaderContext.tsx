"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface HeaderContextType {
  breadcrumb: string[];
  setBreadcrumb: (breadcrumb: string[]) => void;
  pageTitle: string;
  setPageTitle: (title: string) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
}

interface HeaderProviderProps {
  children: ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [breadcrumb, setBreadcrumbState] = useState<string[]>(["Dashboard"]);
  const [pageTitle, setPageTitleState] = useState<string>("Dashboard");

  const setBreadcrumb = useCallback((newBreadcrumb: string[]) => {
    setBreadcrumbState(newBreadcrumb);
  }, []);

  const setPageTitle = useCallback((newTitle: string) => {
    setPageTitleState(newTitle);
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        breadcrumb,
        setBreadcrumb,
        pageTitle,
        setPageTitle,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
