const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('devc'))

// EXERCISE 1
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there <strong>${req.params.username}</strong> !`)
})

// EXERCISE 2
app.get('/roll/:number', (req, res) => {
    if (isNaN(Number(req.params.number))) {
        res.send('You must specify a number.')
    } else {
        let randomNumber
        randomNumber = Math.floor(Number(req.params.number)*Math.random())
        res.send(
            `Hey! You rolled a ${randomNumber}`
        )
    }
})

//EXERCISE 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
  
app.get('/collectibles/:index', (req, res) => {
    if (isNaN(Number(req.params.index))) {
        res.send('Not a correct index') 
    } else if (Number(req.params.index) >= collectibles.length || Number(req.params.index) < 0) {
        res.send('This item is not yet in stock. Check back soon!')
    } else {
        res.send(`So, you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!`)
    }
})

// EXERCISE 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    let min_price = req.query['min-price'];
    let max_price = req.query['max-price'];
    let type = req.query['type'];

    let filteredShoes = shoes;
    if (min_price) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= Number(min_price));
    }
    if (max_price) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price <= Number(max_price));
    }
    if (type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
    res.json(filteredShoes);
  });

app.listen(3030, () => {
    console.log("server is up") 
})