# amann.me

[![Build Status](https://travis-ci.com/amannn/amann.me.svg?branch=master)](https://travis-ci.com/amannn/amann.me)

## Setup
1. Install Node.js.
2. Install an editor that accepts eslint (e. g. [Atom](https://atom.io/) with the plugin [linter-eslint](https://atom.io/packages/linter-eslint)), so you get warnings about syntax or code style errors.
3. Install dependencies with `yarn install`.
4. Add `GITHUB_ACCESS_TOKEN` to `.env`.

## Development

```sh
yarn dev
```

## Run in production

```sh
yarn build

# Test locally
yarn start

# Push to production
yarn deploy
```

