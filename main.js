'use babel';
var lib = require('./lib');


export default {

  activate(state) {
    atom.commands.add('atom-workspace', {
      'basic-package:toggle': () => console.log(lib.getData())
    });
  },

  deactivate() {
  },

  serialize() {
    return {};
  },

};
