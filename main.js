var express = require("express");
var bodyParser = require("body-parser");

var cors = require("cors");
var app = express();

app.use(cors());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

const items = ["item1","item1",] 

app.get("/", (request, response) => {
  // console.log(response);
  response.json(items);

});


// console.log("hello");



// const items = [
//   {
//     name: "Camera",
//     price: 19.25,
//     id: 1,
//     category: "Camera & Photo",
//   },
//   {
//     name: "Dell X5",
//     price: 450,
//     id: 2,
//     category: "Computer & Laptop",
//   },
//   {
//     name: "1L fresh milk",
//     price: 1.99,
//     id: 3,
//     category: "Dairy",
//   },
//   {
//     name: "Philadelphia Cheese",
//     price: 2.99,
//     id: 4,
//     category: "Dairy",
//   },
//   {
//     name: "Naissance Fractionated Coconut Oil",
//     price: 10.5,
//     id: 5,
//     category: "Oils",
//   },
// ];


app.post("/order", (request, response) => {
  const body = request.body;
  // console.log("xxxxxxxxxxxxxxxxxx");
  const {
    firstName,
    lastName,
    address,
    postcode,
    email,
    cardNumber,
    cardExpiry,
    cardPin,
    nameOnCard,
    orderId,
  } = body;

  console.log("body", body);
  if (!firstName || !lastName || !address || !postcode || !email)
    return response.status(400).json();
  // console.log("x");
  if (parseInt(cardNumber) !== 455902345619410)
    return response.status(400).json();
  // console.log("xx");
  if (cardExpiry !== "11/28") return response.status(400).json();
  // console.log("xxx");
  if (parseInt(cardPin) !== 532) return response.status(400).json();
  // console.log("xxxxcccc");
  if (nameOnCard !== "John Smith") return response.status(400).json();
  // console.log("xxxxxxxxxxxxxxxxxx");
  return response.status(200).json();
});

const port = 9300;
app.listen(port, () => {
  // console.log("listening on port", port);
});
