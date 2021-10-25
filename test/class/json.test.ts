import t from 'tap'
import { isEmpty, isIdentical, isJSON } from '../../lib/class/json'

t.plan(1)
t.test('JSON', function (t) {
  t.plan(3)

  t.test('isJSON', function (t) {
    t.plan(5)

    t.test('{}', function (t) {
      t.plan(1)
      t.equal(isJSON({}), true)
    })

    t.test('"{}"', function (t) {
      t.plan(1)
      t.equal(isJSON('{}'), true)
    })

    t.test('[]', function (t) {
      t.plan(1)
      t.equal(isJSON([]), false)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isJSON(null), false)
    })

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isJSON(undefined), false)
    })
  })

  t.test('isEmpty', function (t) {
    t.plan(3)

    t.test('{}', function (t) {
      t.plan(1)
      t.equal(isEmpty({}), true)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isEmpty(null), true)
    })

    t.test('{a:1,b:2}', function (t) {
      t.plan(1)
      t.equal(isEmpty({ a: 1, b: 2 }), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(4)

    t.test('{} | {}', function (t) {
      t.plan(1)
      t.equal(isIdentical({}, {}), true)
    })

    t.test('{a:1,b:2} | {a:1,b:2}', function (t) {
      t.plan(1)
      t.equal(isIdentical({ a: 1, b: 2 }, { a: 1, b: 2 }), true)
    })

    t.test('{a:1,b:2} | {b:2,a:1}', function (t) {
      t.plan(1)
      t.equal(isIdentical({ a: 1, b: 2 }, { b: 2, a: 1 }), true)
    })

    t.test('{a:1,b:2} | {a:1,b:3}', function (t) {
      t.plan(1)
      t.equal(isIdentical({ a: 1, b: 2 }, { a: 1, b: 3 }), false)
    })
  })
})
