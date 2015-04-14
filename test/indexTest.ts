/// <reference path="../typings/chai/chai.d.ts"/>
/// <reference path="../typings/mocha/mocha.d.ts"/>
/// <reference path="../typings/node/node.d.ts"/>

import chai = require('chai')
var expect = chai.expect

import index = require('../src/index')
import child_process = require('child_process')

describe('Index', () => {
    // These tests test the exported function synchronously
    describe('Unit Tests', () => {
        it('Calling sayHello("me") should return "hello, me"', () => {
            expect(index.sayHello('me')).to.equal('hello, me')
        })
    })

    // These tests test the application asynchronously
    describe('App Tests', () => {
        it('The script should output "hello world"', (done) => {
            child_process.spawn('node', ['./build/src/index'])
            .stdout.on('data', (data: Buffer) => {
                expect(data.toString()).to.equal('hello world\n')
                done()
            })
        })
    })
})
