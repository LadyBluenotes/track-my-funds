import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/db/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
      const client = await clientPromise;
      const db = client.db("income");

    const expense = await db.collection("income").deleteOne({ _id: ObjectId(req.query.id as string) });

    if (expense.deletedCount === 0) {
      throw new Error("Income not found");
    }
    res.status(200).json({ message: "Income deleted successfully" });

  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Income not found" });
  }
}
