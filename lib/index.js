const singleton = Symbol()
const singletonEnforcer = Symbol()

class Base64URL {

    version = "1.0.0"

    static get instance() {
        const self = this
        if(!self[singleton]) {
            self[singleton] = new Base64URL(singletonEnforcer)
        }
        return self[singleton]
    }

    constructor(enforcer) {
        if(enforcer !== singletonEnforcer) {
            throw "Failed to construct singleton."
        }
    }

    encode(data) {
        const self = this
        return self.escape(new Buffer(data).toString('base64'))
    }

    decode(data) {
        const self = this
        return new Buffer(self.unescape(data), 'base64').toString('utf8')
    }

    unescape(str) {
        return (str + '==='.slice((str.length + 3) % 4))
            .replace(/\-/g, '+')
            .replace(/_/g, '/')
    }

    escape(str) {
        return str.replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '')
    }
}

export default Base64URL.instance
