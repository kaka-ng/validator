import t from 'tap'
import { isBetween, isIdentical, isNaN, isNumber } from '../../lib/primitive/number'

t.plan(1)
t.test('Number', function (t) {
  t.plan(4)

  t.test('isNumber', function (t) {
    t.plan(8)

    t.test('number', function (t) {
      t.plan(1)
      t.equal(isNumber(Number()), true)
    })

    t.test('1', function (t) {
      t.plan(1)
      t.equal(isNumber(1), true)
    })

    t.test('0', function (t) {
      t.plan(1)
      t.equal(isNumber(0), true)
    })

    t.test('-1', function (t) {
      t.plan(1)
      t.equal(isNumber(-1), true)
    })

    t.test('1.0001', function (t) {
      t.plan(1)
      t.equal(isNumber(1.0001), true)
    })

    t.test('0.0001', function (t) {
      t.plan(1)
      t.equal(isNumber(0.0001), true)
    })

    t.test('-1.0001', function (t) {
      t.plan(1)
      t.equal(isNumber(-1.0001), true)
    })

    t.test('String(1)', function (t) {
      t.plan(1)
      t.equal(isNumber(String(1)), false)
    })
  })

  // isNaN is used to check the type but not the value
  // string number should return NaN as well
  t.test('isNaN', function (t) {
    t.plan(4)

    t.test('string', function (t) {
      t.plan(1)
      t.equal(isNaN(String(1)), true)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isNaN(null), true)
    })

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isNaN(undefined), true)
    })

    t.test('number', function (t) {
      t.plan(1)
      t.equal(isNaN(Number()), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(7)

    t.test('number | number', function (t) {
      t.plan(1)
      t.equal(isIdentical(Number(), Number()), true)
    })

    t.test('1 | 1', function (t) {
      t.plan(1)
      t.equal(isIdentical(1, 1), true)
    })

    t.test('0 | 0', function (t) {
      t.plan(1)
      t.equal(isIdentical(0, 0), true)
    })

    t.test('1 | true', function (t) {
      t.plan(1)
      t.equal(isIdentical(1, true), false)
    })

    t.test('0 | false', function (t) {
      t.plan(1)
      t.equal(isIdentical(1, false), false)
    })

    t.test('0 | null', function (t) {
      t.plan(1)
      t.equal(isIdentical(1, null), false)
    })

    t.test('0 | undefined', function (t) {
      t.plan(1)
      t.equal(isIdentical(1, undefined), false)
    })
  })

  t.test('inRange', function (t) {
    t.plan(6)

    t.test('value', function (t) {
      t.plan(1)
      t.equal(isBetween('abc', 1, 2), false)
    })

    t.test('min', function (t) {
      t.plan(1)
      t.equal(isBetween(1, 'abc', 2), false)
    })

    t.test('max', function (t) {
      t.plan(1)
      t.equal(isBetween(1, 2, 'abc'), false)
    })

    t.test('value below min', function (t) {
      t.plan(1)
      t.equal(isBetween(0, 1, 10), false)
    })

    t.test('value larger max', function (t) {
      t.plan(1)
      t.equal(isBetween(11, 1, 10), false)
    })

    t.test('value in range', function (t) {
      t.plan(1)
      t.equal(isBetween(5, 1, 10), true)
    })
  })
})
