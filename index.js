const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//Send static files
app.use(express.static(__dirname + '/client/dist'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});