import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';
import badWordRouter from './src/routes/bad-word';

const app = express();
// use bodyParser for extracting the body portion and allow only strings and arrays to be passed
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/api/v1', routes);

// Welcoming
app.get('/', (req, res) => {
  res.send('Welcome, Striker Blog!');
});
app.use('/', routes);
app.use('/bad-word', badWordRouter);

app.listen(port, () => {
  console.log('server started successfully...');
});


 export default app;
