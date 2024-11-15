const { createServer } = require("node:http");
const fs = require("node:fs");
const url = require("node:url");

const hostname = "127.0.0.1";
const port = 8080;

createServer((req, res) => {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      fs.readFile("./404.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("File not found");
        }
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
