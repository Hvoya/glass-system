import React from 'react';
import { HashRouter } from 'react-router-dom';

export function withProviders(C) {
  return function AppWithProviders() {
    return (
      <HashRouter>
        <C />
      </HashRouter>
    );
  };
}
