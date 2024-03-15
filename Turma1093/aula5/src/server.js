const http = require("node:http");

const server = http.createServer(async (req, res) => {
  if (req.method === "POST") {
    return res.writeHead(201, { "Content-type": "application/json" }).end(
      JSON.stringify({
        id: 1,
      })
    );
  } else {
    return res.writeHead(201, { "Content-type": "application/json" }).end(
      JSON.stringify({
        id: 1,
      })
    );
  }

  return res.writeHead(404).end();
});

server.listen(3000).once("listening", () => {
  console.log("Estou rodando em http://localhost:3000");
});
