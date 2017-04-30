import assert from "assert"
import fs from "fs"
import base64url from "./../lib/index"

describe('jwt library', () => {

    describe('encode', () => {
        it('should return endcoded string', () => {
            assert.equal("aGVsbG8gd29ybGQ", base64url.encode('hello world'))
        })
    })

    describe('decode', () => {
        it('should return decoded string', () => {
            assert.equal("hello world", base64url.decode('aGVsbG8gd29ybGQ'))
        })
    })
})
