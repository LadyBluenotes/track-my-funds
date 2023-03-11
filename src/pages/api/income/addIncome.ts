import {clientPromise} from "@/lib/db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    try {
      const client = await clientPromise;
      const db = client.db("income");
      const { name, value, user, month, year } = req.body;
      const income = await db.collection("income").insertOne({
        name,
        value,
        user,
        month,
        year,
      });

      res.json(income);

    } catch (err) {
      console.error(err);
      throw new Error("Error adding income");
    }
  };