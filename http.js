const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.end('Welcome to the homepage')
    }
    if(req.url === '/about') {
        res.end('Here is one of my story')
    }
    res.end(`
    <h1>OMG!<!h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back home</a>
    `)
})

server.listen(5000, () => console.log('Server is running on port http://localhost:5000'));