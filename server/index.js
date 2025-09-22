let express=require('express')
let mongoose = require('mongoose')
let cors=require('cors')
const enqueryRoute = require('./APP/Routes/web/enquery.route')
require('dotenv').config()


let app = express()
app.use(cors())
app.use(express.json())


//routes
app.use('/api/website/enquiry', enqueryRoute)

//database
mongoose.connect(process.env.mongodb_uri).then(()=>{
    console.log('Connect to database')
}).catch((err) => {
    console.log(err)
})






//server
app.listen(process.env.port || 3000,()=>{
     console.log('Server is running')
})