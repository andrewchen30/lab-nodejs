// https://github.com/rvagg/node-worker-farm

var workerFarm = require('worker-farm'),
  workers = workerFarm(require.resolve('./pkg-001-worker-farm-child.js')),
  ret = 0;

for (var i = 0; i < 10; i++) {
  workers('#' + i + ' FOO', function (err, outp) {
    console.log(outp);
    if (++ret == 10) workerFarm.end(workers);
  });
}
