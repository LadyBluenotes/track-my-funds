import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/db/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
      const client = await clientPromise;
      const db = client.db("expenses");

    const expense = await db.collection("expenses").deleteOne({ _id: ObjectId(req.query.id as string) });

    if (expense.deletedCount === 0) {
      throw new Error("Expense not found");
    }
    res.status(200).json({ message: "Expense deleted successfully" });

  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Expense not found" });
  }
}
