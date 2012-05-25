# jssuper

You can access to method and constructor of super class like Java.

## Initalize

node:

    //add option "--harmony_proxies"
    require('super');

web:

    <script src="path/to/super.js"></script>

## Usage

Access to constructor:
    function A(message) {
        this.message = message;
    }

    function B() {
        this.super('hello!');
    }
    B.prototype = Object.create(A.prototype);

Access to method:
    A.prototype.foo = function() {
        return '#' + this.message + '#';
    };

    B.prototype.foo = function() {
        return '(' + this.super.foo() + ')';
    };