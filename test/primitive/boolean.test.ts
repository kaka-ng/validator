import t from 'tap'
import { isBoolean, isFalse, isIdentical, isTrue, maybeFalse, maybeTrue } from '../../lib/primitive/boolean'

t.plan(1)
t.test('Boolean', function (t) {
  t.plan(6)

  t.test('isBoolean', function (t) {
    t.plan(7)

    t.test('true', function (t) {
      t.plan(1)
      t.equal(isBoolean(true), true)
    })

    t.test('false', function (t) {
      t.plan(1)
      t.equal(isBoolean(false), true)
    })

    t.test('string', function (t) {
      t.plan(1)
      t.equal(isBoolean(''), false)
    })

    t.test('1', function (t) {
      t.plan(1)
      t.equal(isBoolean(1), false)
    })

    t.test('0', function (t) {
      t.plan(1)
      t.equal(isBoolean(0), false)
    })

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isBoolean(undefined), false)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isBoolean(null), false)
    })
  })

  t.test('isTrue', function (t) {
    t.plan(3)

    t.test('true', function (t) {
      t.plan(1)
      t.equal(isTrue(true), true)
    })

    t.test('false', function (t) {
      t.plan(1)
      t.equal(isTrue(false), false)
    })

    t.test('expression (1 === 1)', function (t) {
      t.plan(1)
      // eslint-disable-next-line no-self-compare
      t.equal(isTrue(1 === 1), true)
    })
  })

  t.test('maybeTrue', function (t) {
    t.plan(5)

    t.test('true', function (t) {
      t.plan(1)
      t.equal(maybeTrue(true), true)
    })

    t.test('1', function (t) {
      t.plan(1)
      t.equal(maybeTrue(1), true)
    })

    t.test('"true"', function (t) {
      t.plan(1)
      t.equal(maybeTrue('true'), true)
    })

    t.test('"abc"', function (t) {
      t.plan(1)
      t.equal(maybeTrue('abc'), false)
    })

    t.test('()=>{}', function (t) {
      t.plan(1)
      t.equal(maybeTrue(() => {}), false)
    })
  })

  t.test('isFalse', function (t) {
    t.plan(3)

    t.test('true', function (t) {
      t.plan(1)
      t.equal(isFalse(true), false)
    })

    t.test('false', function (t) {
      t.plan(1)
      t.equal(isFalse(false), true)
    })

    t.test('expression (1 === 0)', function (t) {
      t.plan(1)
      // @ts-expect-error we need to test for expression
      t.equal(isFalse(1 === 0), true)
    })
  })

  t.test('maybeFalse', function (t) {
    t.plan(5)

    t.test('false', function (t) {
      t.plan(1)
      t.equal(maybeFalse(false), true)
    })

    t.test('0', function (t) {
      t.plan(1)
      t.equal(maybeFalse(0), true)
    })

    t.test('"false"', function (t) {
      t.plan(1)
      t.equal(maybeFalse('false'), true)
    })

    t.test('"abc"', function (t) {
      t.plan(1)
      t.equal(maybeFalse('abc'), false)
    })

    t.test('()=>{}', function (t) {
      t.plan(1)
      t.equal(maybeFalse(() => {}), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(6)

    t.test('true | true', function (t) {
      t.plan(1)
      t.equal(isIdentical(true, true), true)
    })

    t.test('false | false', function (t) {
      t.plan(1)
      t.equal(isIdentical(false, false), true)
    })

    t.test('true | false', function (t) {
      t.plan(1)
      t.equal(isIdentical(true, false), false)
    })

    t.test('false | true', function (t) {
      t.plan(1)
      t.equal(isIdentical(false, true), false)
    })

    t.test('1 | true', function (t) {
      t.plan(1)
      t.equal(isIdentical(1, true), false)
    })

    t.test('0 | false', function (t) {
      t.plan(1)
      t.equal(isIdentical(0, false), false)
    })
  })
})
