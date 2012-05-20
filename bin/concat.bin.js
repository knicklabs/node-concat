#!/usr/bin/env node

var Concat = require('../concat.js');

var options = {
  encoding: 'utf-8',
  manifestFile: 'manifest.txt',
  destinationFile: 'output.js'
};

var args = process.argv.slice(2);

if (args.length < 2) {
  console.log('usage: <manifest> <destination> (options)');
  process.exit(1);
}

for (var i = 0; i < args.length; i++) {
  if (i == 0) {
    options.manifest = args[i];
  } else if (i == 1) {
    options.destination = args[i];
  } else {
    switch (args[i]) {
      case "--utf-8":
        options.encoding = 'utf-8';
        break;
    }
  }
}

var concat = new Concat(options);
concat.process();