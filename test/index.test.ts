import t from 'tap'
import { Array, isArray, isBigInt, isBoolean, isDate, isEmail, isEmpty, isExist, isJSON, isNull, isNumber, isObject, isString, isSymbol, isUndefined } from '../lib'

t.plan(1)
t.test('index', function (t) {
  t.plan(15)

  t.test('Array', function (t) {
    t.plan(1)

    t.test('isArray', function (t) {
      t.plan(1)
      t.equal(Array.isArray([]), true)
    })
  })

  t.test('isArray', function (t) {
    t.plan(1)
    t.equal(isArray([]), true)
  })

  t.test('isDate', function (t) {
    t.plan(1)
    t.equal(isDate(new Date()), true)
  })

  t.test('isJSON', function (t) {
    t.plan(1)
    t.equal(isJSON({}), true)
  })

  t.test('isBigInt', function (t) {
    t.plan(1)
    t.equal(isBigInt(BigInt(0)), true)
  })

  t.test('isBoolean', function (t) {
    t.plan(1)
    t.equal(isBoolean(true), true)
  })

  t.test('isNull', function (t) {
    t.plan(1)
    t.equal(isNull(null), true)
  })

  t.test('isNumber', function (t) {
    t.plan(1)
    t.equal(isNumber(0), true)
  })

  t.test('isObject', function (t) {
    t.plan(1)
    t.equal(isObject({}), true)
  })

  t.test('isString', function (t) {
    t.plan(1)
    t.equal(isString(''), true)
  })

  t.test('isSymbol', function (t) {
    t.plan(1)
    t.equal(isSymbol(Symbol('')), true)
  })

  t.test('isUndefined', function (t) {
    t.plan(1)
    t.equal(isUndefined(undefined), true)
  })

  t.test('isExist', function (t) {
    t.plan(1)
    t.equal(isExist('abc'), true)
  })

  t.test('isEmpty', function (t) {
    t.plan(1)
    t.equal(isEmpty(null), true)
  })

  t.test('isEmail', function (t) {
    t.plan(1)
    t.equal(isEmail('abc@abc.com'), true)
  })
})
