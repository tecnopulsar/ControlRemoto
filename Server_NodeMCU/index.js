const express = require("express");
const app = express();
const cors = require("cors");

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("Query:  ", request.query);
  console.log("---");
  next();
};

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/api/nodemcu", (request, response) => {
  response.json(`Comando recibido ${request.query.command}`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
