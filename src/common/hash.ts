import crypto from 'crypto'

export default class Zhash {

    static sha256(str: string) {
        const h = crypto.createHash('sha256')
        h.update(str)
        return h.digest('hex')
    }
}

export function createId() {
    return new Date().getTime().toString(36) + Math.random().toString(36).slice(-8)
}
