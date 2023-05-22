This is `eslint` config (`import` + `markdown` + `sonarjs` + `unicorn` + `standard` + `prettier` etc)

### Install

```shell
npm i --save-dev github:cakkypamucm/eslint-config
```

### Use

-   add `eslint-config-cakkypamucm` to the "extends" array in your `eslint` config file

<pre>
{
    "extends": ["some-other-config-you-use", <b>"eslint-config-cakkypamucm"</b>]
}
</pre>

-   add [resolvers](https://github.com/import-js/eslint-plugin-import/wiki/Resolvers) to correct working `import/no-unresolved` rule.  
    For webpack-based projects e.g.:

1.

```shell
npm i eslint-import-resolver-webpack -D
```

2.

```json
{
    "settings": {
        "import/resolver": ["node", "webpack"]
    }
}
```

### For synergy

Add [stylelint-config-cakkypamucm](https://github.com/cakkypamucm/stylelint-config) to your project
