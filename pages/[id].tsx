import { doc, getDoc, updateDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import { setCookie } from "cookies-next";
import React from "react";
import type { NextPage } from "next";

import Layout from "components/Layout";
import { database } from "firebaseConfig";

async function checkGuest(id: string | string[] | undefined) {
  const docID = id ? id.toString() : "";
  const UserDBData = doc(database, "guests", docID);
  const docSnap = await getDoc(UserDBData);
  if (docSnap.data()) {
    await updateDoc(UserDBData, {
      open: true,
      open_count: docSnap.data()?.open_count + 1,
    })
      .then(() => {})
      .catch(() => {});
  }
  return docSnap;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query, req, res } = context;
  const check = await checkGuest(query.id);
  if (check.data()) {
    setCookie("guest_name", check.data()?.name, { req, res });
  }

  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
}

const CheckGuest: NextPage = () => {
  return <Layout></Layout>;
};

export default CheckGuest;
