(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.Bn = {};

Bn.View = require('./view');

Bn.EventEmitter = require('./event-emitter-lite');

Bn.Utils = require('./utils');


},{"./event-emitter-lite":2,"./utils":3,"./view":4}],2:[function(require,module,exports){
var EventEmitterLite,
  __slice = [].slice;

module.exports = EventEmitterLite = (function() {
  function EventEmitterLite() {}

  EventEmitterLite.prototype.on = function(eventName, callback) {
    var _base;
    if (this._events == null) {
      this._events = [];
    }
    if ((_base = this._events)[eventName] == null) {
      _base[eventName] = [];
    }
    this._events[eventName].push(callback);
    return this;
  };

  EventEmitterLite.prototype.off = function(eventName, fn) {
    var n, _ref;
    if (arguments.length === 0) {
      delete this.events;
      return this;
    }
    if (fn != null) {
      n = (_ref = this.events[eventName]) != null ? _ref.indexOf(fn) : void 0;
      if (n > -1) {
        this._events[eventName].splice(n, 1);
      }
    } else {
      delete this._events[eventName];
    }
    return this;
  };

  EventEmitterLite.prototype.trigger = function() {
    var args, eventName, _ref, _ref1;
    eventName = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if ((_ref = this._events) != null) {
      if ((_ref1 = _ref[eventName]) != null) {
        _ref1.map(function(callback) {
          return callback.apply(null, args);
        });
      }
    }
    return this;
  };

  return EventEmitterLite;

})();


},{}],3:[function(require,module,exports){
module.exports = {
  extend: function(obj, props) {
    var k, v;
    for (k in props) {
      v = props[k];
      obj[k] = v;
    }
    return obj;
  },
  find: function(list, fn) {
    var i, _i, _len;
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      i = list[_i];
      if (fn(i)) {
        return i;
      }
    }
    return null;
  }
};


},{}],4:[function(require,module,exports){
var EventEmitter, View, extend;

EventEmitter = require('./event-emitter-lite');

extend = require('./utils').extend;

module.exports = View = (function() {
  extend(View.prototype, EventEmitter.prototype);

  View.prototype.template = '';

  function View(el) {
    this.$el = $(el);
    this.render();
  }

  View.prototype.$ = function() {
    var _ref;
    return (_ref = this.$el).find.apply(_ref, arguments);
  };

  View.prototype.remove = function() {
    this.off();
    return this.$el.remove();
  };

  View.prototype.hide = function() {
    return this.$el.hide();
  };

  View.prototype.show = function() {
    return this.$el.show();
  };

  View.prototype.detach = function() {
    return this.$el.detach();
  };

  View.prototype.appendTo = function(el) {
    if (el instanceof View) {
      return el.$el.append(this.$el);
    } else if (el instanceof HTMLElement) {
      return this.$el.appendTo(el);
    } else if (el instanceof jQuery) {
      return this.$el.appendTo(el);
    } else if ((typeof el) === 'string') {
      return $(el).append(this.$el);
    }
  };

  View.prototype.render = function() {
    if (this.template) {
      return this.$el.html(this.template);
    }
  };

  return View;

})();


},{"./event-emitter-lite":2,"./utils":3}]},{},[1])