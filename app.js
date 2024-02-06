const app = require('express')();


app.listen(5000, () => {
    console.log('server in port 5000')
})

app.get('/', (req,res) => {
    res.send('Home page')
})
