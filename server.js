const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

// create the server function
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    for ( var i = 0; i < 101; i++) { // our compteur

        if ( (i % 3) == 0 && (i % 5) == 0) // i est a multiple of 3 and 5
            res.write('invivox\n');
        else if ( (i % 3) == 0 ) // i is a multiple of 3
            res.write('invi\n');
        else if ( (i % 5) == 0 ) // i is a multiple of 5
            res.write('vox\n');
        else res.write(i + '\n'); // i is not a multiple of 3 or 5 or 3 and 5

    }
    // the res must end
    res.end('\n');
});

// the server is now listening to our defined port and hostname
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
