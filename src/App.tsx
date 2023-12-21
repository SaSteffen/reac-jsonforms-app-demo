import React, { useState } from 'react';
import './App.css';
import { materialCells } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import uischema from './uischema';
import modelixSchema from './schema.json';
import { createAjv } from '@jsonforms/core';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { materialRenderers } from '@jsonforms/material-renderers';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontSize: 12,
  },
});

function App() {
  const [data, setData] = useState({ uploads: ['abc', 'def'] });
  const handleDefaultsAjv = createAjv({ useDefaults: true });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <JsonForms
          schema={modelixSchema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data, errors }) => setData(data)}
          ajv={handleDefaultsAjv}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
