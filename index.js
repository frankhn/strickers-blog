import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';
import categories from './src/routes/category'
import badWordRouter from './src/routes/bad-word';


const app = express();
// use bodyParser for extracting the body portion and allow only strings and arrays to be passed
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/api/v1', routes);
app.use('/categories', categories);
app.use('/bad-word', badWordRouter);

app.listen(port, () => {
  console.log('server started successfully...');
});


 export default app;
