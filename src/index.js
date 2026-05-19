import dotenv from "dotenv";
import connectDB from './db/index.js' 
import app from './app.js'
dotenv.config({
    path: './.env' 
});


// 1. Complete the variable name here
const port = process.env.PORT||3000

connectDB()
.then(()=>{
  app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
  })
})
.catch((error)=>{
  console.log('MONGODB connection error ',error)
    process.exit(1)
})