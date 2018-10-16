var routing = require('./routing');

var port = 3000;
var app;

function start(){
    // app = routing.hellWorld();
    // app = routing.postJson();
    // app = routing.allTest();
    // app = routing.getParameters();
     app = routing.multipleFunctions();
}

start();

app.listen(port, () => console.log(`Site started http://localhost:${port}`));