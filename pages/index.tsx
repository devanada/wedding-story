import { GetServerSidePropsContext } from "next";
import { getCookie } from "cookies-next";
import { useState } from "react";
import type { NextPage } from "next";

import BottomTab from "components/BottomTab";
import Landing from "components/Landing";
import Layout from "components/Layout";
import Location from "section/Location";
import Couple from "section/Couple";
import Home from "section/Home";
import Gift from "section/Gift";

interface Props {
  guest_name: string;
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { req, res } = context;
  const getName = getCookie("guest_name", { req, res }) || "Anonym";

  return {
    props: {
      guest_name: getName,
    },
  };
};

const App: NextPage<Props> = ({ guest_name }) => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Layout>
      {visible ? (
        <Landing onClick={() => setVisible(false)} guestName={guest_name} />
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
