import t from 'tap'
import { isEmpty, isIdentical, isString } from '../../lib/primitive/string'

t.plan(1)
t.test('String', function (t) {
  t.plan(3)

  t.test('isString', function (t) {
    t.plan(4)

    t.test('string', function (t) {
      t.plan(1)
      t.equal(isString(String('')), true)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isString(null), false)
    })

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isString(undefined), false)
    })

    t.test('number', function (t) {
      t.plan(1)
      t.equal(isString(Number(0)), false)
    })
  })

  // space will be trim
  t.test('isEmpty', function (t) {
    t.plan(3)

    t.test('string', function (t) {
      t.plan(1)
      t.equal(isEmpty(String('')), true)
    })

    t.test('string(  )', function (t) {
      t.plan(1)
      t.equal(isEmpty(String('  ')), true)
    })

    t.test('string(no)', function (t) {
      t.plan(1)
      t.equal(isEmpty(String('no')), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(2)

    t.test('string | string', function (t) {
      t.plan(1)
      t.equal(isIdentical(String('identical'), String('identical')), true)
    })

    t.test('string(yes) | string(no)', function (t) {
      t.plan(1)
      t.equal(isIdentical(String('yes'), String('no')), false)
    })
  })
})
