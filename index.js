let express = require('express');
let app = express();
const port = 8080;

app.get('/', (req, res) => {
    return res.send('API Movie!');
});

app.get('/bye', (req, res) => {
    return res.send('Good bye!');
});

app.listen(port, () => {
    console.log(`Server started at: 127.0.0.1:${port}`)
});