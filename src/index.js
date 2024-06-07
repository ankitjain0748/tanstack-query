// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { queryClient } from './react-query-client';
import App from './App';

const dehydratedState = window.__REACT_QUERY_STATE__;

ReactDOM.hydrate(
  <QueryClientProvider client={queryClient}>
    <Hydrate state={dehydratedState}>
      <App />
    </Hydrate>
  </QueryClientProvider>,
  document.getElementById('root')
);
