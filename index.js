const express = require('express')
const app = express()
const port =3000


app.get('/xd', (req, res) =>{
    res.send ('¡Hola mundo! Esta clase es interesante :)')
})
app.listen(port, ()  =>  {
    console.log('La aplicación se está ejecutando por el puerto'+ port )

})