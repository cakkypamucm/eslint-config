This is `eslint` config (`standard` + `unicorn` + `sonarjs` + `import` + `markdown` + `prettier` etc.)

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
npm i --save-dev eslint-import-resolver-webpack
```

2.

```json
{
    "settings": {
        "import/resolver": ["node", "webpack"]
    }
}
```
