import t from 'tap'
import { isArray, isEmpty, isIdentical } from '../../lib/class/array'

t.plan(1)
t.test('Array', function (t) {
  t.plan(3)

  t.test('isArray', function (t) {
    t.plan(3)

    t.test('new Array()', function (t) {
      t.plan(1)
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      t.equal(isArray(new Array()), true)
    })

    t.test('[]', function (t) {
      t.plan(1)
      t.equal(isArray([]), true)
    })

    t.test('{}', function (t) {
      t.plan(1)
      t.equal(isArray({}), false)
    })
  })

  t.test('isEmpty', function (t) {
    t.plan(2)

    t.test('[]', function (t) {
      t.plan(1)
      t.equal(isEmpty([]), true)
    })

    t.test('[1,2,3]', function (t) {
      t.plan(1)
      t.equal(isEmpty([1, 2, 3]), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(4)

    t.test('[] | []', function (t) {
      t.plan(1)
      t.equal(isIdentical([], []), true)
    })

    t.test('[1,2] | [1,2]', function (t) {
      t.plan(1)
      t.equal(isIdentical([1, 2], [1, 2]), true)
    })

    t.test('[1,2] | [2,1]', function (t) {
      t.plan(1)
      t.equal(isIdentical([1, 2], [2, 1]), false)
    })

    t.test('[1,2] | [1,2,3]', function (t) {
      t.plan(1)
      t.equal(isIdentical([1, 2], [1, 2, 3]), false)
    })
  })
})
