module.exports = {
  'parser': 'babel-eslint',
  'root': true,
  'env': {
    'es6': true,
    'node': true,
    'mocha': true
  },
  'extends': 'standard',
  'rules': {
    'semi': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
