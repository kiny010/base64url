import assert from "assert"
import fs from "fs"
import base64url from "./../lib/index"

describe('base64url', () => {
    
    describe('encode', () => {
        it('should return endcoded string: aGVsbG8gd29ybGQ', () => {
            assert.equal("aGVsbG8gd29ybGQ", base64url.encode('hello world'))
        })
    })

    describe('decode', () => {
        it('should return decoded string: hello world', () => {
            assert.equal("hello world", base64url.decode('aGVsbG8gd29ybGQ'))
        })
    })

})
