let express=require('express')
const { enquerySingleRow,enqueryInsert ,enqueryList,deleteEnquiry,updateEnquery} = require('../../Controllers/web/enquery.controller')
let enqueryRoute= express.Router()



enqueryRoute.post('/insert',enqueryInsert)

enqueryRoute.get('/list',enqueryList )

enqueryRoute.delete('/delete/:id',deleteEnquiry )

enqueryRoute.put('/update/:id',updateEnquery)

enqueryRoute.get('/single/:id',enquerySingleRow)



module.exports=enqueryRoute