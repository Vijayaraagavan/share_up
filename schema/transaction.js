import { PrismaClient } from "@prisma/client";

function create(payload, callback) {
    const prisma = new PrismaClient({});

    let { payee, groupId, amount, splits, time, message } = payload;
    console.log(payload);
    let [uid, id] = groupId.split("-");
    id = parseInt(id);
    let valid = _validate_split(amount, splits);

    return new Promise(() => {
        prisma.Group.findFirst({
            where: {
                id: id,
                uid: uid
            },
            select: {
                GroupInfo: true,
                Users: {
                    include: {
                        user: {
                            include: {
                                profile: true
                            }
                        }
                    }
                }
            }
        }).then(res => {
            callback(res)
        })
    })
}

function _validate_split(amount, splits) {
    let valid = true;
    // const parsedAmount = parseFloat
    return valid;
}

export default {
    create
}