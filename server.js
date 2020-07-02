const express = require("express");
const app = express();
const port = 8000;

const myCities = [
  {
    id: 1,
    cityName: "Valencia",
    country: "Spain",
    latitude: 39.46,
    longitude: -0.37,
    weather: 28.5,
  },
  {
    id: 2,
    cityName: "Paris",
    country: "Spain",
    latitude: 48.85,
    longitude: 2.27,
    weather: 24.5,
  },
  {
    id: 3,
    cityName: "Estambul",
    country: "Turkey",
    latitude: 41.04,
    longitude: 28.99,
    weather: 34.5,
  },
  {
    id: 4,
    cityName: "Tokyo",
    country: "Japan",
    latitude: 35.5,
    longitude: 138.64,
    weather: 29.5,
  },
];

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

//Homework Task 1
app.get("/", (req, res) => {
  console.log("a client connected to the endpoint /");
  let info = myCities.map((e) => [
    {
      city: e.cityName,
      weather: e.weather,
    },
  ]);
  res.send(info);
});

app.get("/cities", (req, res) => {
  console.log("a client requested the weather");
  res.send("The city is called Barcelona!");
});

app.get("/weather/:cityName", (req, res) => {
  const name = req.params.cityName;
  console.log("a client request the weather of " + name);
  res.send("The weather in " + name + " is 24.5!");
});

app.get("/weather", (req, res) => {
  const name = req.query.name;
  console.log("a client request the weather of " + name);
  res.send("The weather in " + name + " is 24.5!");
});

app.get("/calculation/:calculate", (req, res) => {
  var calculate = req.params.calculate;
  var firstNum = req.query.firstNum;
  var secondNum = req.query.secondNum;
  console.log("a client request the weather of " + firstNum);
  if (calculate == "add") {
    let result = parseInt(firstNum) + parseInt(secondNum);
    res.send(`${result}`);
  } else if (calculate == "substruct") {
    let result = parseInt(firstNum) - parseInt(secondNum);
    res.send(`${result}`);
  } else if (calculate == "multiple") {
    let result = parseInt(firstNum) * parseInt(secondNum);
    res.send(`${result}`);
  } else if (calculate == "devide") {
    let result = parseInt(firstNum) / parseInt(secondNum);
    res.send(`${result}`);
  }
});

app.get("/weathers/:cityName", (req, res) => {
  const name = req.params.cityName;
  console.log("a client request the weather of " + name);
  let city = {
    cityName: name,
    weather: 24.5,
  };
  res.send(city);
});

//Homework Task 2
app.get("/city/:cityName", (req, res) => {
  const cityNombre = req.params.cityName;
  console.log("a client request the weather of " + cityNombre);
  myCities
    .filter((e) => e.cityName == cityNombre)
    .map((ev) => {
      return { city: ev.cityName, weather: ev.weather };
    })
    .forEach((event) => res.send(event));
});

// //Homework Task 3
// app.get("/:city", (req, res) => {
//   const name = req.query.name;
//   console.log("a client request the weather of " + name);
//   myCities
//     .filter((e) => e.cityName == name)
//     .map((ev) => {
//       return { city: ev.cityName, weather: ev.weather };
//     })
//     .forEach((event) => res.send(event));
// });

// Homework Task 4
app.get("/:city", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  console.log("a client request the weather of " + lat);
  myCities
    .filter((e) => e.latitude == lat && e.longitude == lon)
    .map((ev) => {
      return { city: ev.cityName, weather: ev.weather };
    })
    .forEach((event) => res.send(event));
});

// //Homework Task 5
// app.get("/:city", (req, res) => {
//   const id = req.query.id;
//   console.log("a client request the weather of " + id);
//   myCities
//     .filter((e) => e.id == id)
//     .map((ev) => {
//       return { city: ev.cityName, weather: ev.weather };
//     })
//     .forEach((event) => res.send(event));
// });
