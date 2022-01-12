const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

var validator = require('./validator.js');

app.get('/', (req, res) => {
  res.json({"Message":"Welcome to Calculators API v1.0"});
});

app.get('/api/v1/sum/:id', (req, res) => {
  var num = parseFloat(req.params.id)
  var result = 0;
  var msg = validator(num)
  
  if(msg.status == 200) {
  for(let i = 0; i <= num ; i++){
	  result = result + i;
  }
  } else {
	  result = NaN
  }
  res.json({"Message": msg.message, "Status" : msg.status ,"Result": result});
});



app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });