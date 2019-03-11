import express from 'express'
import bodyParser from 'body-parser'



const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server started successfully');
})