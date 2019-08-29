const express = require('express');
const cors = require('cors');
const path = require('path');
let Parser = require('rss-parser');
let parser = new Parser();
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/feeds',(req,res) =>{
    (async () =>{
        let feed = await parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml');
        res.send(feed);
    }) ();
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get('*',(res,req) =>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
}

app.listen(port, () => console.log(`Listening on port ${port}`));