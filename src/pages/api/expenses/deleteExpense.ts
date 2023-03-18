import {clientPromise} from "@/lib/db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    try {
        const client = await clientPromise;
        const db = client.db("income");
            const { id } = req.body;
            const expense = await db.collection("expense").deleteOne({
                _id: id,
            });
            res.json(expense);
    
        } catch (err) {
        console.error(err);
        throw new Error("Error deleting expense");
        }
    };