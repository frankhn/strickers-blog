import express from 'express'
import bodyParser from 'body-parser'
import routes from './src/routes/routes'

// use bodyParser for extracting the body portion and allow only strings and arrays to be passed
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

const app = express();
const port = process.env.PORT || 3000;

app.use('/', routes);

app.listen(port, () => {
    console.log('server started successfully...');
})


module.exports = app;