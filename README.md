meteor-weak-dependency-test
===========================

A small test of Meteor's weak dependency resolution.


This test shows that although a package is included after another in `.meteor/packages`, the first package can still reference the later package.


The `weak-test` package has a weak dependency on `iron-router` will report the contents of `Package['iron-router']` on the server console.  `weak-test` is included first in the `.meteor/packages` file.

Executing `mrt` from a command prompt shows that the weak dependency causes `iron-router` to actually be loaded before the `weak-test` package:

```
$ mrt
I20140111-12:05:30.293(-5)? [weak-test] iron-router package found? true
I20140111-12:05:30.330(-5)? { RouteController:
I20140111-12:05:30.330(-5)?    { [Function]
I20140111-12:05:30.330(-5)?      extend: [Function],
I20140111-12:05:30.330(-5)?      __super__:
I20140111-12:05:30.330(-5)?       { constructor: [Object],
I20140111-12:05:30.330(-5)?         runHooks: [Function],
I20140111-12:05:30.331(-5)?         run: [Function],
I20140111-12:05:30.331(-5)?         action: [Function],
I20140111-12:05:30.331(-5)?         stop: [Function] } },
I20140111-12:05:30.331(-5)?   Route: [Function],
I20140111-12:05:30.332(-5)?   Router:
I20140111-12:05:30.332(-5)?    { options: {},
```
