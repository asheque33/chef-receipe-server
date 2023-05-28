const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
res.send('Chef recipe server running')
});


app.listen(port,()=>{
    console.log(`chef server listening on port: ${port}`);
});