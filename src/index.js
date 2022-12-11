const express = require('express')
 const app = express()

app.get('hello', (req,res) => {
  res.status(200).send('Hello world');
})

app.listen(3000,'0.0.0.0',() =>{
  console.log('server started')
}).once('error', () => {
  console.error(error);
  process.exit(1);
})
