module.exports = {
  extends: [
    'molindo/javascript',
    'molindo/react',
    'plugin:@next/next/recommended'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  }
};
