import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/db/mongodb";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const itemID = req.query.id;

  const client = await clientPromise;
  const db = client.db();

  const result = await db
    .collection("expenses")
    .deleteOne({ _id: new ObjectId(itemID as string) });

  if (result.deletedCount === 0) {
    res.status(404).json({ message: "Expense not found" });
    return;
  }

  res.status(200).json({ message: "Expense deleted successfully" });
};
