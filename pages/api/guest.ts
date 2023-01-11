// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

import { database } from "firebaseConfig";

const dbInstance = collection(database, "guests");

type Data = {
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const docID = id ? id.toString() : "";
    const UserDBData = doc(database, "guests", docID);
    const docSnap = await getDoc(UserDBData);
    if (docSnap.data()) {
      await updateDoc(UserDBData, {
        open: true,
        open_count: docSnap.data()?.open_count + 1,
      })
        .then(() => {
          return res
            .status(200)
            .json({ message: "Guest exist", data: docSnap.data() });
        })
        .catch((err) => {
          return res.status(500).json({ message: err.toString(), data: null });
        });
    } else {
      return res.status(404).json({ message: "No match", data: null });
    }
  } else if (req.method === "POST") {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name required", data: null });
    }
    const check = await checkName(name);
    if (check) {
      return res
        .status(409)
        .json({ message: "Guest already created", data: null });
    }
    await addDoc(dbInstance, {
      name: name,
      open: false,
      open_count: 0,
    })
      .then((data) => {
        return res
          .status(201)
          .json({ message: "Guest created", data: data.id });
      })
      .catch((err) => {
        return res.status(500).json({ message: err.toString(), data: null });
      });
  } else {
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}

async function checkName(name: string) {
  let result = false;
  await getDocs(dbInstance).then((docs) => {
    docs.forEach((doc) => {
      if (doc.data().name === name) result = true;
    });
  });
  return result;
}
