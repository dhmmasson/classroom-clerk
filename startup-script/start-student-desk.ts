import { spawn } from 'child_process'

const args = ['start']
const opts = { cwd: 'clients/student-desk', shell: true }

spawn('npm', args, opts)
