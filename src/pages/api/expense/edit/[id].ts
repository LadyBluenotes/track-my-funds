import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/db/mongodb";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    jsonParser(req, res, async () => {
        const { id, ...expense } = req.body;
        const client = await clientPromise;
        const db = client.db();

        const userID = id;

        const expenseData = await db.collection("expenses").findOne({ _id: userID });

        if (!expenseData) {
            res.status(404).json({ message: "Expense not found" });
            return;
        }

        const updatedExpense = await db
            .collection("expenses")
            .findOneAndUpdate( { _id: userID }, { $set: { ...expense } }, { returnOriginal: false } );

        console.log(updatedExpense)
        res.status(200).json(updatedExpense);
    });
};
