import { PrismaClient } from "@prisma/client";

export default function handle(req, resp) {
    if (req.method != 'POST') {
        resp.status(404).json({ error: "invalid route" })
        return
    }
    const prisma = new PrismaClient({});
    const { userId, pId, gid, action } = req.body;
    let [uid, id] = gid.split("-");
    id = parseInt(id);
    const alice = prisma.Group.findFirst({
        where: {
            id: id,
            uid: uid
        }
    }).then(res => handleJoin(res, pId, action, id, resp, prisma))
}

function handleJoin(res, userId, action, gid, resp, prisma) {
    let { requests, members } = res;
    requests = requests.filter(element => element != userId);
    let insideData = {};
    let newMembers = [];
    if (action == "accept") {
        members.push(userId);
        newMembers = Array.from(new Set(members));

        insideData = {
            requests: requests,
            members: newMembers,
            Users: {
                create: [
                    {
                        user: {
                            connect: {
                                id: userId
                            }
                        }
                    }
                ]
            }
        }
    } else {
        newMembers = Array.from(new Set(members));
        insideData = {
            requests: requests,
            members: newMembers,
        }
    }
    const message = action == "accept" ? "New member joined" : "Member request denied";
    prisma.Group.update({
        where: {
            id: gid
        },
        data: insideData
    }).then(res => {
        resp.status(200).json({ message: message })
    })
}