import React from 'react';

import { BrowserRouter } from 'react-router-dom';

export type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <BrowserRouter>{children}</BrowserRouter>
);
