import t from 'tap'
import { isIdentical, isSymbol } from '../../lib/primitive/symbol'

t.plan(1)
t.test('Symbol', function (t) {
  t.plan(2)

  t.test('isSymbol', function (t) {
    t.plan(3)

    t.test('symbol', function (t) {
      t.plan(1)
      t.equal(isSymbol(Symbol('symbol')), true)
    })

    t.test('symbol.for()', function (t) {
      t.plan(1)
      t.equal(isSymbol(Symbol.for('symbol')), true)
    })

    t.test('string', function (t) {
      t.plan(1)
      t.equal(isSymbol(String('symbol')), false)
    })
  })

  t.test('isIdentical', function (t) {
    t.plan(3)

    t.test('symbol | symbol', function (t) {
      t.plan(1)
      t.equal(isIdentical(Symbol('symbol'), Symbol('symbol')), false)
    })

    t.test('symbol.for() | symbol.for()', function (t) {
      t.plan(1)
      t.equal(isIdentical(Symbol.for('symbol'), Symbol.for('symbol')), true)
    })

    t.test('string | symbol', function (t) {
      t.plan(1)
      t.equal(isIdentical(String('symbol'), Symbol('symbol')), false)
    })
  })
})
