import type { NextPage } from "next";
import { useState } from "react";

import BottomTab from "components/BottomTab";
import Landing from "components/Landing";
import Layout from "components/Layout";
import Home from "section/Home";
import Couple from "section/Couple";
import Location from "section/Location";
import Gift from "section/Gift";

const App: NextPage = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Layout>
      {visible ? (
        <Landing onClick={() => setVisible(false)} />
      ) : (
        <>
          <Home />
          <Couple />
          <Location />
          <Gift />
          <BottomTab />
        </>
      )}
    </Layout>
  );
};

export default App;
