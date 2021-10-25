import t from 'tap'
import { isIdentical, isUndefined } from '../../lib/primitive/undefined'

t.plan(1)
t.test('Undefined', function (t) {
  t.plan(2)

  t.test('isUndefined', function (t) {
    t.plan(4)

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isUndefined(undefined), true)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isUndefined(null), false)
    })

    t.test('0', function (t) {
      t.plan(1)
      t.equal(isUndefined(0), false)
    })

    t.test('emptry string', function (t) {
      t.plan(1)
      t.equal(isUndefined(''), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(4)

    t.test('undefined | undefined', function (t) {
      t.plan(1)
      t.equal(isIdentical(undefined, undefined), true)
    })

    t.test('null | undefined', function (t) {
      t.plan(1)
      t.equal(isIdentical(null, undefined), false)
    })

    t.test('0 | undefined', function (t) {
      t.plan(1)
      t.equal(isIdentical(0, undefined), false)
    })

    t.test('empty string | undefined', function (t) {
      t.plan(1)
      t.equal(isIdentical('', undefined), false)
    })
  })
})
