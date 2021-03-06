import React from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { PosedRouter } from "./components";
import Layout from "./components/Layout";
import Registry from './pages/Registry'

const App: React.SFC<{}> = () => {
  return (
    <Layout>
      <PosedRouter>
        <Home path="/" />
        <Work path="/accommodations" />
        <Contact path="/rsvp" />
        <Registry path='/registry' />
        <NotFound default />
      </PosedRouter>
    </Layout>
  );
};

export default App;
