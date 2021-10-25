import t from 'tap'
import { isBigInt, isIdentical } from '../../lib/primitive/bigint'

t.plan(1)
t.test('BigInt', function (t) {
  t.plan(2)

  t.test('isBigInt', function (t) {
    t.plan(2)

    t.test('BigInt(0)', function (t) {
      t.plan(1)
      t.equal(isBigInt(BigInt(0)), true)
    })

    t.test('Number(0)', function (t) {
      t.plan(1)
      t.equal(isBigInt(Number(0)), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(2)

    t.test('BigInt(0) | BigInt(0)', function (t) {
      t.plan(1)
      t.equal(isIdentical(BigInt(0), BigInt(0)), true)
    })

    t.test('Number(0) | BigInt(0)', function (t) {
      t.plan(1)
      t.equal(isIdentical(Number(0), BigInt(0)), false)
    })
  })
})
