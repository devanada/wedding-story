import type { NextPage } from "next";

import Layout from "components/Layout";
import Home from "section/Home";
import Couple from "section/Couple";
import Location from "section/Location";
import Gift from "section/Gift";

const App: NextPage = () => {
  return (
    <Layout>
      <Home />
      <Couple />
      <Location />
      <Gift />
    </Layout>
  );
};

export default App;
