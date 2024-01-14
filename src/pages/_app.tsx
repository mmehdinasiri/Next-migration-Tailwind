import {AppProps} from 'next/app';
import {NextRouter, withRouter} from 'next/router';

import '../main.css';

type Props = AppProps & {
  router: NextRouter;
};

function App({Component, pageProps}: Props) {
  return <Component {...pageProps} />;
}

export default withRouter(App);
