import t from 'tap'
import { isIdentical, isNull } from '../../lib/primitive/null'

t.plan(1)
t.test('Null', function (t) {
  t.plan(2)

  t.test('isNull', function (t) {
    t.plan(4)

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isNull(null), true)
    })

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isNull(undefined), false)
    })

    t.test('0', function (t) {
      t.plan(1)
      t.equal(isNull(0), false)
    })

    t.test('empty string', function (t) {
      t.plan(1)
      t.equal(isNull(''), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(4)

    t.test('null | null', function (t) {
      t.plan(1)
      t.equal(isIdentical(null, null), true)
    })

    t.test('undefined | null', function (t) {
      t.plan(1)
      t.equal(isIdentical(undefined, null), false)
    })

    t.test('0 | null', function (t) {
      t.plan(1)
      t.equal(isIdentical(0, null), false)
    })

    t.test('empty string | null', function (t) {
      t.plan(1)
      t.equal(isIdentical('', null), false)
    })
  })
})
