import React from 'react';

interface Item {
  id: string;
  title: string;
}

export type ThoughtfulContextProps = Item[];

export const ThoughtfulContext = React.createContext({} as ThoughtfulContextProps);
