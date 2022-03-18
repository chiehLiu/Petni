import '../styles/globals.css';
import '../styles/foundation.scss';
import '../styles/normalize.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
