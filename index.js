const http = require("http");
const fs = require("fs");
const url = require("url");
const figlet = require("figlet");

// creating server
const server = http.createServer((req, res) => {
  // getting pathname
  const page = url.parse(req.url).pathname;
  console.log(page);
  if (page === "/") {
    // reading file, err holds any errors, data holds the contents of the file
    fs.readFile("index.html", (err, data) => {
      // header tells us details about the request
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page === "/about") {
    fs.readFile("about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page === "/contact") {
    fs.readFile("contact-me.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404", (err, data) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080);
