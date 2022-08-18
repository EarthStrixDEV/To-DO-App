const route = require('express').Router();
const mongodb = require('./mongodb');
const { render } = require('ejs')

route.post('/insert', (req, res) => {
    let data = new mongodb({
        title: req.body.title,
        time: req.body.time,
        detail: req.body.detail,
        timeAction: req.body.timeAction
    });
    console.log(data);
    mongodb.saveList(data, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    })
})

route.get('/delete/:id', (req, res) => {
    mongodb.findByIdAndDelete(req.params.id, {useFindAndModify:false}).exec((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    })
})

route.get('/', (req, res) => {
    mongodb.find().exec((err, data) => {
        if (err) {
            console.log(err);
        }
        res.render('index', { data: data });
    })
})

module.exports = route;