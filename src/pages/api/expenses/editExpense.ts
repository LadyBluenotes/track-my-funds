import {clientPromise} from "@/lib/db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    try {
      const client = await clientPromise;
      const db = client.db("expenses");
      const { name, amount, user, month, year } = req.body;
      const expense = await db.collection("expenses").insertOne({
        name,
        amount,
        user,
        month,
        year,
      });

      res.json(expense);

    } catch (err) {
      console.error(err);
      throw new Error("Error editing expense");
    }
  }