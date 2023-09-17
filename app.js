//const http = require("http");
//const routes = require("./routes");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My first page</title></head>");
//     res.write(
//       '<body><form action="/create-user" method="POST"> <input type="text" name="username"><button type="submit"> send </button> </form></body>'
//     );
//     res.write("</html>");
//     res.end();
//   }

//   if (url === "/users") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My first page</title></head>");
//     res.write("<body><ul><li> USER1</li> <li> USER2</li></ul></body>");
//     res.write("</html>");
//     res.end();
//   }
//   if (url === "/create-user" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody.split("=")[1]);
//     });
//     res.statusCode = 302;
//     res.setHeader('Location', '/');
//     res.end();
//   }
// });

// server.listen(3000);

const path = require("path");
const rootDir = require("./util/path");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);
// app.use("/", (req, res, next) => {
//   console.log("THis always run");
//   next();
// });
// app.use("/user", (req, res, next) => {
//   console.log("second one");
//   res.send("<p>Second one</p>");
// });
app.use((req, res, next) => {
  //res.status(404).send("<h1>Page not found </h1>");
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

// app.use((req, res, next) => {
//   console.log("in another the middleware");
//   res.send("<h1>Hello from express</h1>");
// });

app.listen(3000);
