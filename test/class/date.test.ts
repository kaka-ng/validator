import t from 'tap'
import { isDate, isDateString, isIdentical, isISO8601Date } from '../../lib/class/date'

t.plan(1)
t.test('Date', function (t) {
  t.plan(4)
  t.test('isDate', function (t) {
    t.plan(2)

    t.test('new Date()', function (t) {
      t.plan(1)
      t.equal(isDate(new Date()), true)
    })

    t.test('Date.now()', function (t) {
      t.plan(1)
      t.equal(isDate(Date.now()), false)
    })
  })

  t.test('isISO8601Date', function (t) {
    t.plan(7)

    t.test('toISOString', function (t) {
      t.plan(1)
      t.equal(isISO8601Date(new Date().toISOString()), true)
    })

    t.test('2012-01-01T17:52:27.8116975-12:00', function (t) {
      t.plan(1)
      t.equal(isISO8601Date('2012-01-01T17:52:27.8116975-12:00'), true)
    })

    t.test('2012-01-01T17:52:27.8116975+08:00', function (t) {
      t.plan(1)
      t.equal(isISO8601Date('2012-01-01T17:52:27.8116975+08:00'), true)
    })

    t.test('2012-02-01T18:21:06', function (t) {
      t.plan(1)
      t.equal(isISO8601Date('2012-02-01T18:21:06'), true)
    })

    t.test('2012-03-01T00:00:00Z', function (t) {
      t.plan(1)
      t.equal(isISO8601Date('2012-03-01T00:00:00Z'), true)
    })

    t.test('Date.now()', function (t) {
      t.plan(1)
      t.equal(isISO8601Date(Date.now()), false)
    })

    t.test('new Date()', function (t) {
      t.plan(1)
      t.equal(isISO8601Date(new Date()), false)
    })
  })

  t.test('isDateString', function (t) {
    t.plan(6)
    t.test('2048-02-29', function (t) {
      t.plan(1)
      t.equal(isDateString('2048-02-29'), true)
    })

    t.test('9999-12-31', function (t) {
      t.plan(1)
      t.equal(isDateString('9999-12-31'), true)
    })

    t.test('2048/02/29', function (t) {
      t.plan(1)
      t.equal(isDateString('2048/02/29', '/'), true)
    })

    t.test('9999/12/31', function (t) {
      t.plan(1)
      t.equal(isDateString('9999/12/31', '/'), true)
    })

    t.test('2049-02-29', function (t) {
      t.plan(1)
      t.equal(isDateString('2049-02-29'), false)
    })

    t.test('9999-12-32', function (t) {
      t.plan(1)
      t.equal(isDateString('9999-12-32'), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(2)

    t.test('new Date("2011-03-31") | new Date("2011-03-31")', function (t) {
      t.plan(1)
      t.equal(isIdentical(new Date('2011-03-31'), new Date('2011-03-31')), true)
    })

    t.test('new Date("2011-03-31") | new Date("1970-01-01")', function (t) {
      t.plan(1)
      t.equal(isIdentical(new Date('2011-03-31'), new Date('1970-01-01')), false)
    })
  })
})
