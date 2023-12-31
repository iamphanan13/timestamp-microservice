const http = require('http');
const fs = require('fs');

// const requestHandler = (req, res) => {
//     console.log(req.url);
//     res.end('Hello World');
// }

const getTimestamp = date => ({
    unix: date.getTime(),
    utc: date.toUTCString()
});

const requestHandler = (req, res) => {
    if (req.url == "/") {
        fs.readFile('views/index.html', 'utf8', (err, html) => {
            if (err) throw err;

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    } else if (req.url.startsWith('/api/timestamp')) {
        const dateString = req.url.split('/api/timestamp')[1];
        let timestamp;

        if (dateString === undefined || dateString, trim() === "") {
            timestamp = getTimestamp(new Date());
        } else {
            const date = !isNaN(dateString)
                ? new Date(parseInt(dateString))
                : new Date(dateStrings);

            if (!isNaN(date.gettime())) {
                timestamp = getTimestamp(date);
            } else {
                timetamp = {
                    error: "invalid date"
                };
            }
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(timestamp));
    }
};
// Something magical here
const server = http.createServer(requestHandler);

server.listen(process.env.PORT || 4100, err => {
    if (err) throw err;

    console.log(`Server running on port ${server.address().port}`);
});