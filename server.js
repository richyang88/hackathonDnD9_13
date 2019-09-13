const express = require('express')
const app = express()

const { productRouter } = require('./controllers/product.js');

app.use(express.urlencoded({extended: true}));

//may or may not need strict
app.use(express.json({strict: false}));

app.use(express.static(`${__dirname}/client/build`));

app.use('/api/products', productRouter);

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});