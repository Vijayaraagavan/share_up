import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

export default function Handler(req, resp) {
    const prisma = new PrismaClient({ log: ['query'] });
    const { username, password } = req.body;
    let hash = "";
    prisma.User.findFirst({
        where: {
            name: username
        }
    }).then(res => {
        console.log(res)
        if (res) {
            bcrypt
                .compare(password, res.password_hash)
                .then(res => {
                    console.log(res) // return true
                    if (res) {
                        resp.status(200).json({ status: 200, user: "Success login" })
                    } else {
                        resp.status(400).json({ status: 400, user: "failed" })
                    }
                })
        }
    })
}