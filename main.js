const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const items = [
    {
        name: "Camera",
        price: 19.25,
        id: 1,
        category: "Camera & Photo",
    },
    {
        name: "Dell X5",
        price: 450,
        id: 2,
        category: "Computer & Laptop",
    },
    {
        name: "1L fresh milk",
        price: 1.99,
        id: 3,
        category: "Dairy",
    },
    {
        name: "Philadelphia Cheese",
        price: 2.99,
        id: 4,
        category: "Dairy",
    },
    {
        name: "Naissance Fractionated Coconut Oil",
        price: 10.50,
        id: 5,
        category: "Oils",
    }
]

app.get("/", (request, response) => {

    response.json(items)
});

app.post("/order", (request, response) => {
    const body = request.body;
    if(!body) return badRequest;

    const {firstName, lastName, address, postcode, email, cardNumber, cardExpiry, cardPin, nameOnCard, orderId} = body;

    if (!firstName || !lastName || !address || !postcode || !email  ) return response.status(400).json();

    if (parseInt(cardNumber) !== 455902345619410) return response.status(400).json();
    if (cardExpiry !== "11/28") return response.status(400).json();
    if (parseInt(cardPin) !== 532) return response.status(400).json();
    if (nameOnCard !== "John Smith") return response.status(400).json();
    return response.status(200).json();
})

const port = 9300;
app.listen(port, () => {
    console.log("listening on port", port)
});