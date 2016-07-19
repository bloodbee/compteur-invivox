const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    for ( var i = 0; i < 101; i++) {
        if ( (i % 3) == 0 && (i % 5) == 0)
            res.write('invivox\n');
        else if ( (i % 3) == 0 )
            res.write('invi\n');
        else if ( (i % 5) == 0 )
            res.write('vox\n');
        else res.write(i + '\n');
    }
    res.end('END...\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
