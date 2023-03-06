const express = require('express');

const path = require('path');

const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000;


const static_path = path.join(__dirname,'../public');
const tem_path = path.join(__dirname,'./templates/views');
const partial_path = path.join(__dirname,'./templates/partials');

app.set('view engine','hbs');
app.set('views',tem_path)

hbs.registerPartials(partial_path);

app.use(express.static(static_path));
app.get('/', (req,res) => {
    
    return res.render('index');
});

app.get('/about', (req,res) => {

    return res.render('about');
});

app.get('/weather', (req,res) => {
    // return res.render('index');
    return res.render('weather')
});

app.get('*', (req,res) => {
    // return res.render('index');
    return res.render('err')
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});