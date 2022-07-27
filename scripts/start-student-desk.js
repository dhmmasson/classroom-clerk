const spawn = require('child_process').spawn
const args = ['start']
const opts = { cwd: 'clients/student-desk', shell: true }
spawn('npm', args, opts)
