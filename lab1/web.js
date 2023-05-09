// 1: khai bao http module
//require ( import )
const http = require('http')
// 2: khai bao local host/ server (optional)
const host = 'localhost'
//3: khai bao port cua server
const port = 3000
// 4. khoi tao web server 
const server = http.createServer((request, repond) =>{
    repond.write("<h1> hello world</h1>")
    repond.write("<h2>this is my first node.js....")
    repond.write("<img src= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F42962437%2Fwhy-does-http-localhost3000-email-remind-1-takes-me-to-http-localhost3000&psig=AOvVaw3u1gsMjkrrG3i6SBQhcka1&ust=1683695242008000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjtqti75_4CFQAAAAAdAAAAABAE></img>")
    repond.end()
})
//5: chay web server bang cach listen port cua server 
server.listen(port,()=>{
    console.log("web server is running at http//" + host + ":" + port)
})