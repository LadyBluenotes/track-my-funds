import type { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/db/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("expenses");

    const { name, amount, user, month, year } = req.body;

    const expense = await db.collection("expenses").updateOne( { _id: new ObjectId(req.query.id as string) }, {
      $set: {
        name: name,
        amount: amount,
        user: user,
        month: month,
        year: year,
      },
    });

    if(!expense) return res.status(404).json({ message: "Expense not found" });

    res.status(200).json(expense);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
