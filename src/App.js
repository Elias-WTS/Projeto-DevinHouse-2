import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import './mock/api';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
