const path = require('path')

const myCurrentPath = __filename

console.log(path.basename(__dirname))
console.log(path.extname(myCurrentPath))

let pathObj = {
    dir: 'user/local',
    name: 'test',
    ext: '.js'
}

console.log(path.format(pathObj))