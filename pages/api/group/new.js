import { PrismaClient } from "@prisma/client";

export default function handle(req, res) {
    if (req.method != 'POST') {
        res.status(404).json({ error: "invalid route" })
        return
    }
    const prisma = new PrismaClient({ log: ['query'] });
    console.log(req)
    const payload = req.body;
    const { name, userId } = payload;
    const groupId = generateId();
    const query = {
        name: name,
        uid: groupId,
        admin: userId,
        members: [userId],
        Users: {
            create: [
                {
                    assignedAt: new Date(),
                    user: {
                        connect: {
                            id: userId
                        }
                    }
                }
            ]

        }
    }
    const alice = prisma.Group.create({
        data: query,
    }).then(res => console.log(res))
    console.log({ alice })
    res.status(200).json({ status: 200, message: "Group created successfully" })
}

const generateId = () => {
    let id = "";
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 10)
        id = id.concat(`${num}`);
    }
    return id;
}