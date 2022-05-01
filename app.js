const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('welcome to home page');
})

app.get('/test/:type', (req, res) => {
    const type = req.params.type
    if (type !== 'true') {
        return res.status(400).json({success: false})
    }
    return res.send("you are in test")
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("started ..")
});


