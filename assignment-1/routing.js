const handler = require('./route-handler');

function routing (req, res) {
    let url = req.url;
    // console.log(url)

    if (url === '/') {
        return handler.index(req, res);
    } else if (url === '/create-user') {
        return handler.createUser(req, res);
    } else {
        return handler.notFound(req, res);
    }
}

module.exports = {
    'routing': routing
}