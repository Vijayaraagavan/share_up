import { PrismaClient } from "@prisma/client";
import transaction from "../../../schema/transaction";

export default function handle(req, resp) {
    if (req.method != 'POST') {
        resp.status(404).json({ error: "invalid route" })
        return
    }
    const prisma = new PrismaClient({});
    const payload = req.body;

    const callback = (res) => {
        console.log('group ', res)
        resp.status(200).json({ message: "done", res: res })
    }
    transaction.create(payload, callback);
}