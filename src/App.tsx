import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {theme} from 'assets/theme';
import {BrowserRouter} from 'react-router-dom';
import Rotas from 'rotas';
import {ToastContainer} from 'react-toastify';
import {Provider} from "react-redux";
import {store} from "store";


function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Rotas/>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme={'colored'}
                        style={{zIndex: 9999999}}
                    />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )
}

export default App
