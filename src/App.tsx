import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'assets/theme';
import { BrowserRouter } from 'react-router-dom';
import Rotas from 'rotas';




function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Rotas />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
