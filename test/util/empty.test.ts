import t from 'tap'
import { isEmpty, isExist } from '../../lib/util/empty'

t.plan(1)
t.test('Empty', function (t) {
  t.plan(2)

  t.test('isEmpty', function (t) {
    t.plan(8)

    t.test('""', function (t) {
      t.plan(1)
      t.equal(isEmpty(''), true)
    })

    t.test('{}', function (t) {
      t.plan(1)
      t.equal(isEmpty({}), true)
    })

    t.test('[]', function (t) {
      t.plan(1)
      t.equal(isEmpty([]), true)
    })

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isEmpty(undefined), true)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isEmpty(null), true)
    })

    t.test('"123"', function (t) {
      t.plan(1)
      t.equal(isEmpty('123'), false)
    })

    t.test('{foo:"bar"}', function (t) {
      t.plan(1)
      t.equal(isEmpty({ foo: 'bar' }), false)
    })

    t.test('[1,2,3]', function (t) {
      t.plan(1)
      t.equal(isEmpty([1, 2, 3]), false)
    })
  })

  t.test('isExist', function (t) {
    t.plan(8)

    t.test('""', function (t) {
      t.plan(1)
      t.equal(isExist(''), false)
    })

    t.test('{}', function (t) {
      t.plan(1)
      t.equal(isExist({}), false)
    })

    t.test('[]', function (t) {
      t.plan(1)
      t.equal(isExist([]), false)
    })

    t.test('undefined', function (t) {
      t.plan(1)
      t.equal(isExist(undefined), false)
    })

    t.test('null', function (t) {
      t.plan(1)
      t.equal(isExist(null), false)
    })

    t.test('"123"', function (t) {
      t.plan(1)
      t.equal(isExist('123'), true)
    })

    t.test('{foo:"bar"}', function (t) {
      t.plan(1)
      t.equal(isExist({ foo: 'bar' }), true)
    })

    t.test('[1,2,3]', function (t) {
      t.plan(1)
      t.equal(isExist([1, 2, 3]), true)
    })
  })
})
