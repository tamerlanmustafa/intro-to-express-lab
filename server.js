const express = require('express')

const app = express()

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there <strong>${req.params.username}</strong> !`)
})

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


app.listen(3000, () => {
    console.log("server is up")
})