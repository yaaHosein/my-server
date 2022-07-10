const express = require("express");
var cors = require('cors')  
const app = express();

app.use(cors())


const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
]

app.get("/", (request, response) => {
   
    response.json(items)
})

const port  = 9300;
app.listen(port, () => {
    console.log("listening on port", port)
});