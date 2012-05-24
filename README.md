# jssuper

You can access to method and constructor of super class like Java.

## Install

```sh
npm install superclass
```

## Initalize

node:

    //add option "--harmony_proxies"
    require('superclass');

web:

    <script src="path/to/superclass.js"></script>

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
