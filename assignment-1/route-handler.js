function index(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Index</h1>');
    // input form, submit to /create-user
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>');
    res.end();
}

function createUser(req, res) {
//     parse the form data
//     create a user
//     redirect to /
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        body = Buffer.concat(body).toString();
        if (body.split('=')[0] === 'username') {
            console.log(body.split('=')[1]);
        }
        res.writeHead(302, {'Location': '/'});
        res.end();
    });
}

function notFound(req, res) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>Not Found</h1>');
    res.end();
}

module.exports = {
    'index': index,
    'notFound': notFound,
    'createUser': createUser
}