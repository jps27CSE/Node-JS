const fs = require('fs');

fs.readFile('./test.json', (err,data) => {
    if(err)
    {
        console.log(err)
    }

    let obj = JSON.parse(data)
    console.log(obj)
})