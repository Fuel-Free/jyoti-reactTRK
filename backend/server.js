const express = require('express');
const conn = require('./db/db');
const userRouter = require('./routes/userRoute');
const cors = require('cors');
const port = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors(
    { origin: 'http://localhost:3000',
  }
))
conn()
app.use('/api',userRouter)

app.listen(port,()=>{
    console.log("you are connected to the posrt number" + port)
})