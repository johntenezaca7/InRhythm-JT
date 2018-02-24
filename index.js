const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

//Send static files
app.use(express.static(__dirname + '/client/dist'));



// app.get('/api/search', (req, res) => {
//     let search = req.body.search;
//     axios.get(`https://itunes.apple.com/search?term=${search}&entity=album&limit=25`).then((resp) => {
//         console.log('res', resp.data)
//         res.send(resp.data)
//     }).catch(err => console.log(err));
//     res.send('error');
//   }

// );


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});