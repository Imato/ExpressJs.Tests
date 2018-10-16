var express = require('express');
var app = express();


function getApp(){
    return app;
}

function hellWorld(){
    app.get('/', (_, res) => { res.send("Hello World") })

    return getApp();
}

function postJson(){
    app.post('/postJson', function(req, res, next){
        console.log(`Request: ${req.body}`);
        res.send("Done");
    });

    return getApp();
}

function allTest(){

    app.all('/*', (req, res, next) => { res.send(`Access to path ${req.path}`); next() });
    return getApp();
}

function getParameters(){

    app.get('/test/:param1/:param2', (req, res) => { res.send(req.params); });
    return getApp();
}

function multipleFunctions(){

    var message = '';

    var f1 = function(req, res, next){
        message += 'From f1\n';
        next();
    }

    var f2 = function(req, res, next){
        message += 'From f2\n';
        next();
    }

    var f3 = function(req, res, next){
        message += 'From f3\n';
        res.send(message);
    }

    app.get('/multiple', [f1, f2, f3]);
    return getApp();
}


module.exports = {
    getApp:getApp,
    hellWorld: hellWorld,
    postJson: postJson,
    allTest: allTest,
    getParameters : getParameters,
    multipleFunctions: multipleFunctions
}
