import clientPromise from "@/lib/db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const client = await clientPromise;
      const db = client.db("expenses");

      const { name, value, user, month, year } = req.body;

      const expense = await db.collection("expenses").insertOne({
        name,
        value,
        user,
        month,
        year,
      });

      res.json(expense);

    } catch (err) {
      console.error(err);
      throw new Error("Error adding expense");
    }
  };