import { NextApiRequest, NextApiResponse } from 'next';
import { clientPromise } from '@/lib/db/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db('expenses');

        const expenses = await db.collection('expenses').find({}).toArray();

        res.json(expenses);
    } catch (err) {
        console.error(err);
        throw new Error('Error getting expenses');
    }
}