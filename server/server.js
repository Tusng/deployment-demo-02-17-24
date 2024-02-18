const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;
//Require library for PORT
// const dotevn = require('dotenv');
//Invoke config method
// dotevn.config();

app.use(cors());
app.use(express.static(`${__dirname}/public`))

// ROUTES / Endpoints

app.get('/api/cat', (req, res) => {
    res.status(200).send('Smelly Cat')
});

// const { PORT } = process.env;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
