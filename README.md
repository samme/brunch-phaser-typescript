Brunch with Phaser 3 (TypeScript)
====================

A [Brunch](http://brunch.io) skeleton for making games with [Phaser 3](http://phaser.io/phaser3) and [TypeScript][3]. ([Why Brunch?](http://brunch.io/docs/why-brunch))

    brunch new <project> -s samme/brunch-phaser-typescript

Get started
-----------

- Install (if you don't have them):
  - [Node.js](https://nodejs.org)
  - [Brunch](http://brunch.io): `npm install -g brunch`
- Run:
  - `brunch new <project> -s samme/brunch-phaser-typescript`
  - `npm run start` or `brunch watch --server` watches the project with continuous rebuild.
  - `npm run build` or `brunch build --production` builds a minified project for production.
- Make:
  - Write your code in [app](app).
  - Put game assets in [assets](app/static/assets).

Phaser
------

Phaser is managed through [npm](https://docs.npmjs.com/cli/npm).

    npm ls --production

Update with:

    npm update

### Other builds

See the `npm.static` entry in [brunch-config](./brunch-config.coffee).

Add NPM packages
----------------

    npm install -S <package-name>

and then [import][1] as appropriate in your code.

Add other libraries
-------------------

Add the unminified script to [vendor](vendor).

Plugins
-------

```shell
# List
npm list --dev --depth=0

# Add (http://brunch.io/plugins)
npm install -D plugin-name
```

### Settings

- [typescript-brunch](https://www.npmjs.com/package/typescript-brunch#brunch-config)
- [uglify-js-brunch](https://www.npmjs.com/package/uglify-js-brunch#usage)
  - [minify options](https://www.npmjs.com/package/uglify-js#minify-options)

[1]: https://www.typescriptlang.org/docs/handbook/modules.html
[3]: https://www.typescriptlang.org
