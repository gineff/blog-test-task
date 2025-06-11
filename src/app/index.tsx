import { Layout } from './layout';
import { withProviders } from './providers';
import { Router } from './router/router';

export const App = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

const AppWithProviders = withProviders(App);

export default AppWithProviders;
