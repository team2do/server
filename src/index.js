import express from 'express';

require('dotenv').config();

const app = express();

const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default app;
