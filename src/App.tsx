import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { List } from './components/List/List';
import './App.scss';

// Create a client
const queryClient = new QueryClient();

function App() {
  const reactRouterRoutes = [
    { path: '/', component: () => <Dashboard /> },
    { path: '/tab1', component: () => <Dashboard /> },
    { path: '/tab2', component: () => <List /> }
  ];
  const reactRouterRoutesResult = reactRouterRoutes.map(
    ({ path, component }) => (
      <Route key={path} path={path} exact component={component} />
    )
  );
  return (
    <div className="AppWrapper">
      <BrowserRouter>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <Header />
          {reactRouterRoutesResult}
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
