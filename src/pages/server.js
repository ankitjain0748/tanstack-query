// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { QueryClient, QueryClientProvider, Hydrate } = require('@tanstack/react-query');
const { queryClient } = require('./src/react-query-client');
const App = require('./src/App').default;
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

const fetchUsers = async () => {
  const { data } = await axios.get('https://your-laravel-app.com/api/users');
  return data;
};

app.get('/*', async (req, res) => {
  await queryClient.prefetchQuery(['users'], fetchUsers);

  const appMarkup = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={queryClient.getQueryData()}>
        <App />
      </Hydrate>
    </QueryClientProvider>
  );

  const initialState = queryClient.getQueryData(['users']);
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${appMarkup}</div><script>window.__REACT_QUERY_STATE__=${JSON.stringify(initialState)}</script>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
