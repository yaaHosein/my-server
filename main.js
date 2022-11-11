const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors())


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
})

const port = 9300;
app.listen(port, () => {
    console.log("listening on port", port)
});