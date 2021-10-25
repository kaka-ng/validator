import t from 'tap'
import { isEqual, isIdentical, isObject } from '../../lib/primitive/object'

t.plan(1)
t.test('Object', function (t) {
  t.plan(3)

  t.test('isObject', function (t) {
    t.plan(9)

    t.test('object', function (t) {
      t.plan(1)
      t.equal(isObject(Object()), true)
    })

    t.test('{}', function (t) {
      t.plan(1)
      t.equal(isObject({}), true)
    })

    t.test('array', function (t) {
      t.plan(1)
      t.equal(isObject([]), true)
    })

    t.test('date', function (t) {
      t.plan(1)
      t.equal(isObject(new Date()), true)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isObject(null), true)
    })

    t.test('new string', function (t) {
      t.plan(1)
      // eslint-disable-next-line no-new-wrappers
      t.equal(isObject(new String()), true)
    })

    t.test('number', function (t) {
      t.plan(1)
      t.equal(isObject(Number()), false)
    })

    t.test('string', function (t) {
      t.plan(1)
      t.equal(isObject(String()), false)
    })

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isObject(undefined), false)
    })
  })

  // should be in same pointer
  t.test('isIdentical', function (t) {
    t.plan(2)

    t.test('ref | ref', function (t) {
      t.plan(1)
      const a = {}
      t.equal(isIdentical(a, a), true)
    })

    t.test('{} | {}', function (t) {
      t.plan(1)
      t.equal(isIdentical({}, {}), false)
    })
  })

  // should be in same structure
  t.test('isEqual', function (t) {
    t.plan(16)

    t.test('ref | ref', function (t) {
      t.plan(1)
      const a = {}
      t.equal(isEqual(a, a), true)
    })

    t.test('null | null', function (t) {
      t.plan(1)
      t.equal(isEqual(null, null), true)
    })

    t.test('null | undefined', function (t) {
      t.plan(1)
      t.equal(isEqual(null, undefined), false)
    })

    t.test('{} | {}', function (t) {
      t.plan(1)
      t.equal(isEqual({}, {}), true)
    })

    t.test('{a:1,b:2} | {a:1,b:2}', function (t) {
      t.plan(1)
      t.equal(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), true)
    })

    t.test('{a:1,b:2} | {b:2,a:1}', function (t) {
      t.plan(1)
      t.equal(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }), true)
    })

    t.test('{a:1,b:2} | {a:1,b:3}', function (t) {
      t.plan(1)
      t.equal(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }), false)
    })

    t.test('[] | []', function (t) {
      t.plan(1)
      t.equal(isEqual([], []), true)
    })

    t.test('[1,2] | [1,2]', function (t) {
      t.plan(1)
      t.equal(isEqual([1, 2], [1, 2]), true)
    })

    t.test('[1,2] | [2,1]', function (t) {
      t.plan(1)
      t.equal(isEqual([1, 2], [2, 1]), false)
    })

    t.test('[1,2] | [1,2,3]', function (t) {
      t.plan(1)
      t.equal(isEqual([1, 2], [1, 2, 3]), false)
    })

    t.test('new Date("2011-03-31") | new Date("2011-03-31")', function (t) {
      t.plan(1)
      t.equal(isEqual(new Date('2011-03-31'), new Date('2011-03-31')), true)
    })

    t.test('new Date("2011-03-31") | new Date("1970-01-01")', function (t) {
      t.plan(1)
      t.equal(isEqual(new Date('2011-03-31'), new Date('1970-01-01')), false)
    })

    t.test('new Date(1234) | 1234', function (t) {
      t.plan(1)
      t.equal(isEqual(new Date(1234), 1234), false)
    })

    t.test('()=>{} | ()=>{}', function (t) {
      t.plan(1)
      // function should be equal when they are in same reference
      t.equal(isEqual(() => {}, () => {}), false)
    })

    t.test('/abc/ | /abc/', function (t) {
      t.plan(1)
      // regex should be equal when they are in same reference
      t.equal(isEqual(/abc/, /abc/), false)
    })
  })
})
