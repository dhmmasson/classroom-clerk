const spawn = require('child_process').spawn
const args = ['api.js']
const opts = { cwd: './server/dist/', shell: true }
spawn('node', args, opts)
