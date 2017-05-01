/**
 * Base64URL Library written in ECMAScript 6.
 *
 * @author Brian K. Lau https://christa.io
 * @version 1.0.0
 */

const singleton = Symbol()
const singletonEnforcer = Symbol()

class Base64URL {

    /**
     * Returns a shared instance of class (singleton).
     * @return {Class}
     */
    static get instance() {
        const self = this
        if(!self[singleton]) {
            self[singleton] = new Base64URL(singletonEnforcer)
        }
        return self[singleton]
    }

    /**
     * Constructs class instance
     * @param  {Symbol} enforcer
     * @return {Class}
     */
    constructor(enforcer) {
        const self = this
        if(enforcer !== singletonEnforcer) {
            throw "Failed to construct singleton."
        }
        return self
    }

    /**
     * Returns base64 encoded string.
     * @param  {String} str
     * @return {String}
     */
    encode(str) {
        const self = this
        return self.escape(Buffer.from(str).toString('base64'))
    }

    /**
     * Returns base64 decoded string.
     * @param  {String} data
     * @return {String}
     */
    decode(data) {
        const self = this
        return Buffer.from(self.unescape(data), 'base64').toString()
    }

    /**
     * Returns unescaped base64 string.
     * @param  {String} str
     * @return {String}
     */
    unescape(str) {
        return (str + '==='.slice((str.length + 3) % 4))
            .replace(/\-/g, '+')
            .replace(/_/g, '/')
    }

    /**
     * Returns escaped base64 string.
     * @param  {String} str
     * @return {String}
     */
    escape(str) {
        return str
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '')
    }
}

export default Base64URL.instance
