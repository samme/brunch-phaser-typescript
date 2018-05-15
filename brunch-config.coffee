# http://brunch.io/docs/config
module.exports =
  conventions:
    assets: 'app/static/**'
  files:
    javascripts:
      joinTo:
        'app.js': 'app/**'
        'vendor.js': ['node_modules/**', 'vendor/**']
    stylesheets:
      joinTo: 'app.css'
  modules:
    autoRequire:
      'app.js': ['initialize']
  npm:
    static: [
      'node_modules/phaser/dist/phaser.js'
      # 'node_modules/phaser/dist/phaser-arcade-physics.js'
    ]
  plugins:
    brunchTypescript:
      ignoreErrors: [2503] # eg Cannot find namespace 'Phaser'
  server:
    noPushState: on
