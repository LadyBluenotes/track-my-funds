import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/db/mongodb";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    if (!db) {
      throw new Error("Database not connected");
    }

    const { id } = req.query;

    if (!ObjectId.isValid(id as string)) {
      throw new Error("Invalid id");
    }

    const expense = await db
      .collection("expenses")
      .findOne({ _id: new ObjectId(id as string) });

    res.status(200).json(expense);
  } catch (err) {
    console.error(err);
    throw new Error("Error getting expenses");
  }
};
