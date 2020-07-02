const app = express();
const port = 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.get("/", (req, res) => {
  console.log("a client connected to the endpoint /");
  res.send("Hello World!");
});

app.get("/weather", (req, res) => {
  const name = req.query.name;
  console.log("a client request the weather of " + name);
  res.send("The weather in " + name + " is 24.5!");
});
