const express = require('express')
const app = express()

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

// Validation: If the index does not correspond to an item in the array, respond with “This item is not yet in stock. Check back soon!”

// Response: Should describe the item at the given index, like “So, you want the shiny ball? For 5.95, it can be yours!” Include both the name and price properties.
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




app.listen(3000, () => {
    console.log("server is up")
})