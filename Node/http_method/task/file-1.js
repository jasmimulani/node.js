const http = require("http");

const server1 = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write(`this is a frist servar in node task`);
  res.end("<h1> this is frist server end</h1>");
});

server1.listen(1111, () => {
  console.log(`server start at http://localhost:1111`);
});

const server2 = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write(`this is a second servar in node task`);
  res.end("<h1> this is second server end</h1>");
});

server2.listen(2222, () => {
  console.log(`server start at http://localhost:2222`);
});

const server3 = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write(`this is a third servar in node task`);
  res.end("<h1> this is third server end</h1>");
});

server3.listen(3333, () => {
  console.log(`server start at http://localhost:3333`);
});

const server4 = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write(`this is a fourth servar in node task`);
  res.end(`<h1> this is fourth server end</h1>`);
});

server4.listen(4444, () => {
  console.log(`server start at http://localhost:4444`);
});

const server5 = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write(`this is a fifth servar in node task`);
  res.end(`<h1> this is fifthth server end</h1>`);
});

server5.listen(5555, () => {
  console.log(`server start at http://localhost:5555`);
});

const closeservars1 = () => {
  server1.close(() => {
    console.log("server 1 closed");
  });
}
closeservars1();

const closeservars2 = () => {
  server2.close(() => {
    console.log("server 2 closed");
  });
}
closeservars2();

const closeservars3 = () => { 
  server3.close(() => {
    console.log("server 3 closed");
  });
}
closeservars3();

const closeservars4 = () => {
  server4.close(() => {
    console.log("server 4 closed");
  });
}
closeservars4();

const closeservars5 = () => {
  server5.close(() => {
    console.log("server 5 closed");
  });
}
closeservars5();