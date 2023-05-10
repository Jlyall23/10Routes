const express = require('express')
const app = express()
const port = 3111
const football = require('./models/football')
const basketball = require('./models/basketball')


//middleware

//routes
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/football', (req, res) => {
    res.render('Index', { football: football });
});

app.get('/basketball', (req, res) => {
    res.render('BasketballIndex', { basketball: basketball });
});

app.get('/baseball', (req, res) => {
    res.send('baseball')
});

app.get('/hockey', (req, res) => {
    res.send('hockey')
});

app.get('/golf', (req, res) => {
    res.send('golf')
});

app.get('/tennis', (req, res) => {
    res.send('tennis')
});

app.get('/swimming', (req, res) => {
    res.send('swimming')
});

app.get('/racing', (req, res) => {
    res.send('racing')
});

app.get('/running', (req, res) => {
    res.send('running')
});


app.listen(port,() => {
    console.log('listening');
});




