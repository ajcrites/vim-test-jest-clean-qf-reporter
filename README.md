# vim-test jest Reporter

A [reporter](https://facebook.github.io/jest/docs/en/configuration.html#reporters-array-modulename-modulename-options)
for the [`jest`](https://facebook.github.io/jest/) testing framework that cleans
strips down most of the output for use with [vim-test](https://github.com/janko-m/vim-test)
and the quickfix window.

Use this with https://github.com/craigdallimore/vim-jest-cli

## Usage

```
yarn add --dev vim-test-jest-clean-qf-reporter
```

In your `.vimrc`

```
let g:test#javascript#jest#options = '--reporters vim-test-jest-clean-qf-reporter'
```

If you don't want to install a dependency, just clone this repo or copy the
`index.js` file and use an absolute path to it as the reporter.
