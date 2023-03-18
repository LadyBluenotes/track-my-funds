import {clientPromise} from "@/lib/db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const id = req.query.id;
    try {
      const client = await clientPromise;
      const db = client.db("income");
  
      const income = await db
        .collection("income")
        .deleteOne({ _id: id });
      res.json(income);
    } catch (err) {
      console.error(err);
      throw new Error("Error deleting income");
    }
  };