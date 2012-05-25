Object.defineProperty(Object.prototype, 'super', {
    get: function() {
        var superProto, method, constructor;

        superProto = Object.getPrototypeOf(Object.getPrototypeOf(this));

        method = function(rcvr, name) {
            return superProto[name].bind(this);
        }.bind(this);

        constructor = function() {
            superProto.constructor.apply(this, arguments);
        }.bind(this);

        return Proxy.createFunction({get: method}, constructor);
    }
});