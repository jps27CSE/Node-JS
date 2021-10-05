const fs = require('fs')

const testObj = {
    name: 'jack',
    adress: {
        city: 'pabna'
    },
    email: 'test@gmail.com'
}

const data = JSON.stringify(testObj)

fs.writeFile('./test.json', data, (err) => {
    if (err) {
        console.log('Error')
    }
    else {
        console.log('Success')
    }
})