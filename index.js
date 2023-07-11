const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// middleware 
app.use(cors());

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
res.send('Chef recipe server running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs.chefs);
});

app.get('/chefs/:id', (req, res) => {
const id = parseInt(req.params.id);
// console.log(id); ei id(default~string) just route e(localhost:5000/chefs/13) hit korar id jeta json datay thakteo pare nao thakte pare;
// res.send(id);
if(id === 0){
    res.send(chefs.chefs)
}
else{
    const selectedChef = chefs.chefs.find(chef => parseInt(chef.id) === id) || {chef : null} ;
    res.send(selectedChef);
}


});


app.listen(port,()=>{
    console.log(`chef server listening on port: ${port}`);
});