const os = require('os') // os means operating system
const user = os.userInfo()
console.log(`The syste Uptime is ${os.uptime()}`)
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)