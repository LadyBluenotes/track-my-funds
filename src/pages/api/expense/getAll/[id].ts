// get all expenses for a specific user
import { clientPromise } from "@/lib/db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("expenses");
    
        const { id } = req.query;
    
        const expense = await db
        .collection("expenses")
        .find({ user: id })
        .toArray();
    
        res.json(expense);
    } catch (err) {
        console.error(err);
        throw new Error("Error getting expenses");
    }
    }