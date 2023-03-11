import { clientPromise } from "@/lib/db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("expenses");
    const expenses = await db.collection("expenses").find().toArray();

    res.json(expenses);
  } catch (err) {
    console.error(err);
    throw new Error("Error adding expenses");
  }
}
