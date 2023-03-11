import { clientPromise } from "@/lib/db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("income");
    const incomes = await db.collection("income").find().toArray();

    res.json(incomes);
  } catch (err) {
    console.error(err);
    throw new Error("Error adding incomes");
  }
}
