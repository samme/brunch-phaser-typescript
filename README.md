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

Phaser is managed through [npm](https://docs.npmjs.com/cli/npm). The latest release is installed when you create a new project.

    npm view phaser version

Update with:

    npm update

### Other builds

See the `npm.static` entry in [brunch-config](./brunch-config.coffee).

Typescript
----------

[Phaser 3's definitions][2] are still evolving, and there may be errors.

Add packages
------------

    npm install -S <package-name>

and then [import][1] as appropriate in your code.

Configuration
-------------

- [brunch](http://brunch.io/docs/config)
- [typescript-brunch](https://www.npmjs.com/package/typescript-brunch#brunch-config)
- [uglify-js-brunch](https://www.npmjs.com/package/uglify-js-brunch#usage)
  - [minify options](https://www.npmjs.com/package/uglify-js#minify-options)

[1]: https://www.typescriptlang.org/docs/handbook/modules.html
[2]: https://github.com/photonstorm/phaser3-docs/tree/master/typescript
[3]: https://www.typescriptlang.org
