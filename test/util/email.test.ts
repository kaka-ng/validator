import t from 'tap'
import { isEmail, isIdentical } from '../../lib/util/email'

t.plan(1)
t.test('Email', function (t) {
  t.plan(2)

  t.test('isEmail', function (t) {
    t.plan(4)

    t.test('abc@abc.com', function (t) {
      t.plan(1)
      t.equal(isEmail('abc@abc.com'), true)
    })

    t.test('abc+abc@abc.com', function (t) {
      t.plan(1)
      t.equal(isEmail('abc+abc@abc.com'), true)
    })

    t.test('123@123', function (t) {
      t.plan(1)
      t.equal(isEmail('123@123'), false)
    })

    t.test('123', function (t) {
      t.plan(1)
      t.equal(isEmail('123'), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(2)

    t.test('abc@abc.com | abc@abc.com', function (t) {
      t.plan(1)
      t.equal(isIdentical('abc@abc.com', 'abc@abc.com'), true)
    })

    t.test('abc@abc.com | abc+abc@abc.com', function (t) {
      t.plan(1)
      t.equal(isIdentical('abc@abc.com', 'abc+abc@abc.com'), false)
    })
  })
})
