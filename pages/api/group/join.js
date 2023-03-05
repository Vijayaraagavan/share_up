import { PrismaClient } from "@prisma/client";

export default function handle(req, resp) {
    if (req.method != 'POST') {
        resp.status(404).json({error: "invalid route"})
        return
    }
    const prisma = new PrismaClient({});
    const { userId, displayId} = req.body;
    let [uid, id] = displayId.split("-");
    id = parseInt(id);
    const alice = prisma.Group.findFirst({
        where: {
            id: id,
            uid: uid
        }
    }).then(res => handleJoin(res, userId, id, resp, prisma))
}

function handleJoin(res, userId, gid, resp, prisma) {
    const {requests} = res;
    let found = requests.includes(userId);
    if (found) {
        resp.status(400).json({message: "Request is pending"})
        return
    }
    requests.push(userId);
    prisma.Group.update({
        where: {
            id: gid
        },
        data: {
            requests: requests
        }
    }).then(res => {
        resp.status(200).json({message: "Request sent successfully"})
    })
}