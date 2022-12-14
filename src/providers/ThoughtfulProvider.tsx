import React from 'react';
import { ThoughtfulContext } from '../context/thoughtful.context';
import data from '../data/data.json';

export interface IThoughtfulProvider {
  children: React.ReactNode;
}

function ThoughtfulProvider({ children }: IThoughtfulProvider): JSX.Element {

  return (
    <ThoughtfulContext.Provider value={data}>
      {children}
    </ThoughtfulContext.Provider>
  );
}

export default ThoughtfulProvider;