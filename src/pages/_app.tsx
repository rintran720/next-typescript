import '~/styles/globals.css';
import './_app.d';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/store/config';
import { styled, ThemeWithConfigProvider } from '~/theme/core';
import { AppHead, Box } from '~/components/core';
import ErrorBoundary from '~/containers/ErrorBoundary';
import NavBar from '~/containers/NavBar';
import TopBar from '~/containers/TopBar';

const PREFIX = 'App';
const classes = {
  root: `${PREFIX}-root`,
  body: `${PREFIX}-body`,
  content: `${PREFIX}-content`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    minWidth: '100wh',
    minHeight: '100vh',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
  },
  [`&.${classes.body}`]: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  [`&.${classes.content}`]: {
    flex: 1,
    width: '100%',
  },
}));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeWithConfigProvider>
            <StyledBox className={classes.root}>
              <ErrorBoundary>
                <NavBar />
                <StyledBox className={classes.body}>
                  <TopBar />
                  <StyledBox className={classes.content}>{<Component {...pageProps} />}</StyledBox>
                </StyledBox>
              </ErrorBoundary>
            </StyledBox>
          </ThemeWithConfigProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
