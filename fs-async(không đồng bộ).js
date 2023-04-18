const { readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8',(err, result) =>{ // utf8 is required, don't forget to involve it
    // An example of a callback function
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-2.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err){
                    console.log(err)
                    return;
                }
                console.log(result)
            }
        )
    })
})
