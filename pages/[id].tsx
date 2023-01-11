import { GetServerSidePropsContext } from "next";
import { setCookie } from "cookies-next";
import React from "react";
import type { NextPage } from "next";

import Layout from "components/Layout";

interface Props {
  guest_name: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query, req, res } = context;
  let url = "";
  if (process.env.NODE_ENV === "production") {
    url = `https://${req.rawHeaders[1]}`;
  } else {
    url = `http://${req.headers.host}`;
  }
  const response = await fetch(`${url}/api/guest?id=${query.id}`);
  const data = await response.json();

  if (response.status === 200) {
    setCookie("guest_name", data.data.name, { req, res });
  }
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
}

const CheckGuest: NextPage<Props> = () => {
  return <Layout></Layout>;
};

export default CheckGuest;
