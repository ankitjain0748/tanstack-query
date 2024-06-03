const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const { QueryClient, QueryClientProvider } = require('@tanstack/react-query');
const { dehydrate } = require('@tanstack/react-query');
const reactSsrPrepass = require('react-ssr-prepass');
const { default: Product } = require('./pages/Product');
const App = require('../src/App').default;

const renderPage = async (url) => {
  // Create a new instance of QueryClient
  const queryClient = new QueryClient();
  const context = {};

  // Define the JSX for the SSR rendering
  const jsx = (
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url} context={context}>
        <Product/>
        {/* Additional components can be added here if needed */}
      </StaticRouter>
    </QueryClientProvider>
  );

  // Prepass the JSX to resolve any promises
  await reactSsrPrepass(jsx);

  // Dehydrate the QueryClient to get the initial state
  const dehydratedState = dehydrate(queryClient);

  // Render the JSX to a string
  const html = renderToString(jsx);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React App</title>
      <link rel="stylesheet" href="/static/css/main.css">
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // Inject the dehydrated state into the HTML
        window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}
      </script>
      <script src="/static/js/bundle.js"></script>
    </body>
    </html>
  `;
};

const writeHtmlToFile = async (url, filePath) => {
  try {
    // Render the page and get the HTML content
    const html = await renderPage(url);

    // Write the HTML content to a file
    fs.writeFileSync(filePath, html, 'utf8');

    console.log(`Page ${url} rendered successfully.`);
  } catch (error) {
    console.error(`Error rendering page ${url}:`, error);
  }
};

// Specify the URL and file path for the page to render
const url = '/products';
const filePath = path.resolve(__dirname, '../public/index.html');
console.log("filePath",filePath)
// Render the page and write the HTML to a file
writeHtmlToFile(url, filePath);
