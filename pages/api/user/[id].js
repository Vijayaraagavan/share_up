import { PrismaClient } from "@prisma/client";
export default function handle(req, resp) {
    const { id } = req.query;
    if (req.method != 'GET') {
        resp.status(404).json({ error: "invalid route" })
        return
    }
    const userId = parseInt(id);
    const prisma = new PrismaClient({});
    prisma.User.findFirst({
        where: {
            id: userId
        },
        select: {
            email: true,
            name: true,
            profile: {
                select: {
                    phoneNo: true,
                    locality: true,
                    active: true,
                    expense: true
                }
            },
            groups: {
                include: {
                    group: {
                        include: {
                            Users: {
                                include: {
                                    user: true
                                }
                            }
                        }
                    }
                }
            }
        }
    }).then(res => {
        resp.status(200).json({ message: "done", user: res })
    })
}