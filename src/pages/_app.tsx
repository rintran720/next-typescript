import '../styles/globals.css';
import './_app.d';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/store/config';
import theme from '~/theme/config';
import ThemeProvider from '~/theme/ThemeProvider';
import AppHead from '~/components/AppHead';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
