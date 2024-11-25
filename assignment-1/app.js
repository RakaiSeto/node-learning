const http = require('http');
const routing = require('./routing');

const server = http.createServer(routing.routing);

console.log("debug")

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});