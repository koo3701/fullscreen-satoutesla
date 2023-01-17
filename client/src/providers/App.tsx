import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <BrowserRouter>{children}</BrowserRouter>
);
