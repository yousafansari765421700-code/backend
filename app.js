
import express from 'express'

const app = express();
app.get('/products',(req , res)=>{
res.json("hello products")
})

app.get('/about',(req , res)=>{
res.json("hello about")
})

app.get('/contact',(req , res)=>{
res.json("hello contact")
})

app.get('/',(req , res)=>{
res.json("hello server runing is port no 5000")
})

app.listen(5000, () => {
  console.log('Server running on port 5000');
});